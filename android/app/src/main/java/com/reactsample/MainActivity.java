package com.reactsample;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import net.nativo.reactsdk.NativeAd;
import net.nativo.reactsdk.NativeVideoAd;
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
        NativoSDK.getInstance().enableTestAdvertisements(NtvAdData.NtvAdType.IN_FEED_AUTO_PLAY_VIDEO);
        NativoSDK.getInstance().enableDevLogs();
    }
}
