#!/usr/bin/env bash

source bin/.profilerc;
source bin/_utils.sh;



#try
(
    if [[ $(isJavaInstalled;) == "false" ]]; then exit 1; fi
    if [[ $(isAndroidInstalled;) == "false" ]]; then exit 2; fi
    if [[ $(isNodeInstalled;) == "false" ]]; then exit 3; fi
    if [[ $(isNodeVersion;) == "false" ]]; then exit 31; fi
    if [[ $(isNpmInstalled;) == "false" ]]; then exit 4; fi
    if [[ $(isNativeScriptInstalled;) == "false" ]]; then exit 5; fi

    cd ../nativescript

    if [[ -d "node_modules" ]]
    then
        $(rm -rf node_modules;) || exit 6;
    fi

    if [[ -d "hooks" ]]
    then
        $(rm -rf hooks;) || exit 7;
    fi

    if [[ -d "platforms" ]]
    then
        $(rm -rf platforms;) || exit 8;
    fi

    if [[ -e "package.bck" ]]
    then
        cp -rf "package.bck" "package.json" || exit 9;
    else
        cp -rf "package.json" "package.bck" || exit 9;
    fi

    cd ..;

    npm run start.android;

    exit 0;

)
#catch
_rc=$?;
case ${_rc} in
    0)  echo "";
        ;;
    1)  echo "Java is not installed or configured properly";
        ;;
    2)  echo "Android is not installed or configured properly";
        ;;
    3)  echo "Node is not installed or configured properly";
        ;;
    31) echo "Node version ${__NODE_VERSION__} is not installed";
        ;;
    4)  echo "Npm is not installed or configured properly";
        ;;
    5)  echo "NativeScript is not installed or configured properly";
        ;;
    6) echo "\"rm -rf node_modules\" failed";
        ;;
    7)  echo "\"rm -rf hooks\" failed";
        ;;
    8)  echo "\"rm -rf platforms\" failed";
        ;;
    9)  echo "\"failed attempting to backup / restore package.json\"";
        ;;
    *)  echo "fubar! Something went wrong.";
        ;;
esac
#finally
exit ${_rc};
