echo Building and linking app-component-a
echo ====================================
cd app-component-a
call npm install
call npm run build
call npm link

echo Building and linking app-component-b
echo ====================================
cd ..\app-component-b
call npm install
call npm run build
call npm link

echo Building and linking app-component-c
echo ====================================
cd ..\app-component-c
call npm install
call npm run build
call npm link

echo Building and linking app-component-d
echo ====================================
cd ..\app-component-d
call npm install
call npm run build
call npm link

echo Building and linking spa-poc;
echo ============================
cd ..\spa-poc
call npm install
call npm link @spa/app-component-a @spa/app-component-b @spa/app-component-c @spa/app-component-d
call npm run build
cd ..

echo Done ...


