package com.reactsample;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import net.nativo.reactsdk.NativeAd;
import net.nativo.reactsdk.NativeLandingPage;
import net.nativo.reactsdk.NativeVideoAd;
import net.nativo.reactsdk.StandardDisplayAd;
import net.nativo.sdk.NativoSDK;
import net.nativo.sdk.ntvcore.NtvAdData;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactSample";
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        NativoSDK.getInstance().init(this);
        NativoSDK.getInstance().registerNativeAd(new NativeAd());
        NativoSDK.getInstance().registerVideoAd(new NativeVideoAd());
        NativoSDK.getInstance().registerLandingPage(new NativeLandingPage());
        NativoSDK.getInstance().registerStandardDisplayAd(new StandardDisplayAd());
//        NativoSDK.getInstance().enableTestAdvertisements(NtvAdData.NtvAdType.STANDARD_DISPLAY);
        NativoSDK.getInstance().enableDevLogs();
    }

}
