#!/usr/bin/env bash

function isInstalled() {
    if [[ ! $(which $1;) ]]
    then
        echo "false";
    else
        echo "true";
    fi
}

function isNpmInstalled() {
    echo $(isInstalled "npm");
}

function isNodeVersion() {
    if [[ $(node -v;) == "${__NODE_VERSION__}" ]]
    then
        echo "true";
    else
        echo "false";
    fi
}

function isNodeInstalled() {
    echo $(isInstalled "node");
}

function isNativeScriptInstalled() {
    echo $(isInstalled "nativescript");
}

function isTypeScriptInstalled() {
    echo $(isInstalled "typescript");
}

function isAndroidInstalled() {
    echo $(isInstalled "android");
}

function isJavaInstalled() {
    echo $(isInstalled "java");
}