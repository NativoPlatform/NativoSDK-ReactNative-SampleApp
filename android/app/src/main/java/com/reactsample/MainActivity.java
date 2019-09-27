package com.reactsample;

import android.content.Context;
import android.content.res.Resources;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactActivity;

import net.nativo.reactsdk.NativeAd;
import net.nativo.reactsdk.NativeLandingPage;
import net.nativo.reactsdk.NativeVideoAd;
import net.nativo.sdk.NativoSDK;
import net.nativo.sdk.ntvcore.NtvAdData;

public class MainActivity extends ReactActivity {

    private static final String DRAWABLE = "drawable";
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
        NativoSDK.getInstance().enableTestAdvertisements(NtvAdData.NtvAdType.NATIVE);
        NativoSDK.getInstance().enableDevLogs();
        int a = getResourceId(this, "ic_media_play", DRAWABLE);
    }

    private int getResourceId(Context root, String variableName, String resourceName) {
        Resources resources = root.getResources();
        final int resourceId = resources.getIdentifier(variableName, resourceName,
                root.getPackageName());
        return resourceId;
    }
}
