### Install deps and run

    $ git submodule update --init --recursive
    $ npm i
    $ npx expo run:ios

### Update this repo if upstream submodule changes

    $ cd local_modules/expo-tone-synth
    $ git fetch
    $ git checkout main
    $ git pull origin main
    $ cd ../..
    $ git add local_modules/expo-tone-synth
    $ git commit -m "Update submodule expo-tone-synth to latest commit"
    $ git push origin main
