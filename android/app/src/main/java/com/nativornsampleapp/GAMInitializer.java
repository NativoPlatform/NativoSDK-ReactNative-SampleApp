package com.nativornsampleapp;

import android.annotation.TargetApi;
import android.app.Activity;
import android.os.Build;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.util.ReactFindViewUtil;
import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.doubleclick.PublisherAdRequest;
import com.google.android.gms.ads.doubleclick.PublisherAdView;

import net.nativo.reactsdk.ntvadapter.RNNtvSectionAdapter;
import net.nativo.reactsdk.ntvadapter.RNNtvSectionAdapterManager;
import net.nativo.reactsdk.ntvutil.ViewFinder;
import net.nativo.sdk.NativoSDK;

import javax.annotation.Nonnull;

public class GAMInitializer extends ReactContextBaseJavaModule {

    private static final String GAM_AD_UNIT_ID = "/416881364/AdUnitSDK";
    private static final String GAM_SECTION_URL = "http://www.nativo.net/mobiledfptest";

    public GAMInitializer(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "GAMInitializer";
    }

    @ReactMethod
    public void loadBanner(int index) {
        Log.d(getName(), "load banner called with index " + index);
        Activity currentActivity = getCurrentActivity();
        if (currentActivity != null) {
            currentActivity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Log.d(getName(), "load banner called");

                    PublisherAdView mPublisherAdView = new PublisherAdView(getCurrentActivity());
                    final AdSize ntvAdSize = new AdSize(3, 3);
                    mPublisherAdView.setAdSizes(ntvAdSize, AdSize.BANNER);
                    mPublisherAdView.setAdUnitId(GAM_AD_UNIT_ID);
                    // Create an ad request.
                    final PublisherAdRequest adRequest = new PublisherAdRequest.Builder()
                            .addCustomTargeting("ntvPlacement", "1092187").build();

                    mPublisherAdView.setAdListener(new AdListener() {
                        @TargetApi(Build.VERSION_CODES.KITKAT)
                        @Override
                        public void onAdLoaded() {
                            super.onAdLoaded();
                            Log.d("GAM", "adUnit: " + mPublisherAdView.getAdUnitId() + " adSize: " + mPublisherAdView.getAdSize() + "index "+ index);
                            if (mPublisherAdView.getAdSize().equals(ntvAdSize)) {
                                // find tagged publisherNativoAdContainer view using the below Util
                                ViewFinder.getInstance().findPublisherAdContainer(mPublisherAdView.getRootView(), getCurrentActivity(), parentContainer -> {
                                    if (parentContainer != null) {
                                        RNNtvSectionAdapter ntvSectionAdapter = RNNtvSectionAdapterManager.getInstance().getNtvSectionAdapter(GAM_SECTION_URL, index);
                                        NativoSDK.makeGAMRequestWithPublisherAdView(mPublisherAdView, (ViewGroup) parentContainer, GAM_SECTION_URL, index, ntvSectionAdapter);
                                    } else {
                                        Log.d(getName(), "Could not find parent container for Nativo ad.");
                                    }
                                });

                            } else {
                                Log.d(getName(), "Did receive GAM banner ad");
                            }
                        }

                        @Override
                        public void onAdFailedToLoad(int errorCode) {
                            // Code to be executed when an ad request fails.
                            Log.d(getName(), "onAdFailedToLoad: errorCode: " + errorCode);
                        }
                    });

                    mPublisherAdView.loadAd(adRequest);
                }
            });
        }
    }
}

