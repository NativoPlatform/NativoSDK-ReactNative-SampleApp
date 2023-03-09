package com.nativornsampleapp;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import net.nativo.sdk.NativoSDK;

public class MainActivity extends ReactActivity {

    /**
    * Returns the name of the main component registered from JavaScript. This is used to schedule
    * rendering of the component.
    */
    @Override
    protected String getMainComponentName() {
    return "NativoRNSampleApp";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        NativoSDK.init(this);
    }
}
