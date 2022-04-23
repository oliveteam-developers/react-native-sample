package com.reactnativedemomodule;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = DemoModuleModule.NAME)
public class DemoModuleModule extends ReactContextBaseJavaModule {
    public static final String NAME = "DemoModule";

    public DemoModuleModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void getCurrentLocation(Promise promise) {
        String[] result = {"1", "2"};
        promise.resolve(result);
    }
}
