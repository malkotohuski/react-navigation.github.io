"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[75068],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?i.createElement(h,r(r({ref:n},d),{},{components:t})):i.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(67294),a=t(86010),o={tabItem:"tabItem_Ymn6"};function r(e){var n=e.children,t=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return N}});var i=t(83117),a=t(67294),o=t(86010),r=t(12466),l=t(16550),s=t(91980),p=t(67392),d=t(50012);function u(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function c(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:u(t);return function(e){var n=(0,p.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId,o=(0,l.k6)(),r=function(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:t,groupId:i});return[(0,s._X)(r),(0,a.useCallback)((function(e){if(r){var n=new URLSearchParams(o.location.search);n.set(r,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[r,o])]}function g(e){var n,t,i,o,r=e.defaultValue,l=e.queryString,s=void 0!==l&&l,p=e.groupId,u=c(e),g=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=i.find((function(e){return e.default})))?n:i[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:u})})),k=g[0],f=g[1],y=h({queryString:s,groupId:p}),v=y[0],b=y[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),t=(0,d.Nk)(n),i=t[0],o=t[1],[i,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),w=N[0],x=N[1],C=function(){var e=null!=v?v:w;return m({value:e,tabValues:u})?e:null}();return(0,a.useLayoutEffect)((function(){C&&f(C)}),[C]),{selectedValue:k,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);f(e),b(e),x(e)}),[b,x,u]),tabValues:u}}var k=t(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var n=e.className,t=e.block,l=e.selectedValue,s=e.selectValue,p=e.tabValues,d=[],u=(0,r.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=d.indexOf(n),i=p[t].value;i!==l&&(u(n),s(i))},m=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var i,a=d.indexOf(e.currentTarget)+1;t=null!=(i=d[a])?i:d[0];break;case"ArrowLeft":var o,r=d.indexOf(e.currentTarget)-1;t=null!=(o=d[r])?o:d[d.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},p.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return d.push(e)},onKeyDown:m,onClick:c},r,{className:(0,o.Z)("tabs__item",f.tabItem,null==r?void 0:r.className,{"tabs__item--active":l===n})}),null!=t?t:n)})))}function v(e){var n=e.lazy,t=e.children,i=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===i}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})})))}function b(e){var n=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(y,(0,i.Z)({},e,n)),a.createElement(v,(0,i.Z)({},e,n)))}function N(e){var n=(0,k.Z)();return a.createElement(b,(0,i.Z)({key:String(n)},e))}},55259:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var i=t(83117),a=t(80102),o=(t(67294),t(3905)),r=(t(74866),t(85162),["components"]),l={id:"deep-linking",title:"Deep linking",sidebar_label:"Deep linking"},s=void 0,p={unversionedId:"deep-linking",id:"version-6.x/deep-linking",title:"Deep linking",description:"This guide will describe how to configure your app to handle deep links on various platforms. To handle incoming links, you need to handle 2 scenarios:",source:"@site/versioned_docs/version-6.x/deep-linking.md",sourceDirName:".",slug:"/deep-linking",permalink:"/docs/deep-linking",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/deep-linking.md",tags:[],version:"6.x",frontMatter:{id:"deep-linking",title:"Deep linking",sidebar_label:"Deep linking"},sidebar:"version-6.x/docs",previous:{title:"Navigating without the navigation prop",permalink:"/docs/navigating-without-navigation-prop"},next:{title:"Configuring links",permalink:"/docs/configuring-links"}},d={},u=[{value:"Setup with Expo projects",id:"setup-with-expo-projects",level:2},{value:"Set up with bare React Native projects",id:"set-up-with-bare-react-native-projects",level:2},{value:"Setup on iOS",id:"setup-on-ios",level:3},{value:"Hybrid React Native and native iOS Applications",id:"hybrid-react-native-and-native-ios-applications",level:4},{value:"Setup on Android",id:"setup-on-android",level:3},{value:"Testing deep links",id:"testing-deep-links",level:2},{value:"Testing with <code>npx uri-scheme</code>",id:"testing-with-npx-uri-scheme",level:3},{value:"Testing with <code>xcrun</code> on iOS",id:"testing-with-xcrun-on-ios",level:3},{value:"Testing with <code>adb</code> on Android",id:"testing-with-adb-on-android",level:3},{value:"Third-party integrations",id:"third-party-integrations",level:2}],c={toc:u},m="wrapper";function h(e){var n=e.components,l=(0,a.Z)(e,r);return(0,o.kt)(m,(0,i.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide will describe how to configure your app to handle deep links on various platforms. To handle incoming links, you need to handle 2 scenarios:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the app wasn't previously open, the deep link needs to set the initial state"),(0,o.kt)("li",{parentName:"ol"},"If the app was already open, the deep link needs to update the state to reflect the incoming link")),(0,o.kt)("p",null,"React Native provides a ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/linking"},(0,o.kt)("inlineCode",{parentName:"a"},"Linking"))," to get notified of incoming links. React Navigation can integrate with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking")," module to automatically handle deep links. On Web, React Navigation can integrate with browser's ",(0,o.kt)("inlineCode",{parentName:"p"},"history")," API to handle URLs on client side. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuring-links"},"configuring links")," to see more details on how to configure links in React Navigation."),(0,o.kt)("p",null,"While you don't need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"linking")," prop from React Navigation, and can handle deep links yourself by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking")," API and navigating from there, it'll be significantly more complicated than using the ",(0,o.kt)("inlineCode",{parentName:"p"},"linking")," prop which handles many edge cases for you. So we don't recommend implementing it by yourself."),(0,o.kt)("p",null,"Below, we'll go through required configurations so that the deep link integration works."),(0,o.kt)("h2",{id:"setup-with-expo-projects"},"Setup with Expo projects"),(0,o.kt)("p",null,"First, you will want to specify a URL scheme for your app. This corresponds to the string before ",(0,o.kt)("inlineCode",{parentName:"p"},"://")," in a URL, so if your scheme is ",(0,o.kt)("inlineCode",{parentName:"p"},"mychat")," then a link to your app would be ",(0,o.kt)("inlineCode",{parentName:"p"},"mychat://"),". You can register for a scheme in your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," by adding a string under the scheme key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "scheme": "mychat"\n  }\n}\n')),(0,o.kt)("p",null,"Next, install ",(0,o.kt)("inlineCode",{parentName:"p"},"expo-linking")," which we'd need to get the deep link prefix:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx expo install expo-linking\n")),(0,o.kt)("p",null,"Then, let's configure React Navigation to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"scheme")," for parsing incoming deep links:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as Linking from 'expo-linking';\n\nconst prefix = Linking.createURL('/');\n\nfunction App() {\n  const linking = {\n    prefixes: [prefix],\n  };\n\n  return (\n    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n")),(0,o.kt)("p",null,"The reason that is necessary to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking.createURL")," is that the scheme will differ depending on whether you're in the client app or in a standalone app."),(0,o.kt)("p",null,"The scheme specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," only applies to standalone apps. In the Expo client app you can deep link using ",(0,o.kt)("inlineCode",{parentName:"p"},"exp://ADDRESS:PORT/--/")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"ADDRESS")," is often ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PORT")," is often ",(0,o.kt)("inlineCode",{parentName:"p"},"19000")," - the URL is printed when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"expo start"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking.createURL")," function abstracts it out so that you don't need to specify them manually."),(0,o.kt)("p",null,"If you are using universal links, you need to add your domain to the prefixes as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const linking = {\n  prefixes: [Linking.createURL('/'), 'https://app.example.com'],\n};\n")),(0,o.kt)("h2",{id:"set-up-with-bare-react-native-projects"},"Set up with bare React Native projects"),(0,o.kt)("h3",{id:"setup-on-ios"},"Setup on iOS"),(0,o.kt)("p",null,"Let's configure the native iOS app to open based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"mychat://")," URI scheme."),(0,o.kt)("p",null,"You'll need to link ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTLinking")," to your project by following the steps described here. To be able to listen to incoming app links, you'll need to add the following lines to ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDelegate.m")," in your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"// Add the header at the top of the file:\n#import <React/RCTLinkingManager.h>\n\n// Add this inside `@implementation AppDelegate` above `@end`:\n- (BOOL)application:(UIApplication *)application\n   openURL:(NSURL *)url\n   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options\n{\n  return [RCTLinkingManager application:application openURL:url options:options];\n}\n")),(0,o.kt)("p",null,"If your app is using ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/ios/universal-links/"},"Universal Links"),", you'll need to add the following code as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"// Add this inside `@implementation AppDelegate` above `@end`:\n- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity\n restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler\n{\n return [RCTLinkingManager application:application\n                  continueUserActivity:userActivity\n                    restorationHandler:restorationHandler];\n}\n")),(0,o.kt)("p",null,"Now you need to add the scheme to your project configuration."),(0,o.kt)("p",null,"The easiest way to do this is with the ",(0,o.kt)("inlineCode",{parentName:"p"},"uri-scheme")," package by running the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx uri-scheme add mychat --ios\n")),(0,o.kt)("p",null,"If you want to do it manually, open the project (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleApp/ios/SimpleApp.xcworkspace"),') in Xcode. Select the project in sidebar and navigate to the info tab. Scroll down to "URL Types" and add one. In the new URL type, set the identifier and the URL scheme to your desired URL scheme.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Xcode project info URL types with mychat added",src:t(55236).Z,width:"1098",height:"560"})),(0,o.kt)("p",null,"To make sure Universal Links work in your app, you also need to setup ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/Xcode/supporting-associated-domains"},"Associated Domains")," on your server."),(0,o.kt)("h4",{id:"hybrid-react-native-and-native-ios-applications"},"Hybrid React Native and native iOS Applications"),(0,o.kt)("p",null,"If you're using React Navigation within a hybrid app - an iOS app that has both Swift/ObjC and React Native parts - you may be missing the ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTLinkingIOS")," subspec in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Podfile"),", which is installed by default in new React Native projects. To add this, ensure your ",(0,o.kt)("inlineCode",{parentName:"p"},"Podfile")," looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pod"}," pod 'React', :path => '../node_modules/react-native', :subspecs => [\n    . . . // other subspecs\n    'RCTLinkingIOS',\n    . . .\n  ]\n")),(0,o.kt)("h3",{id:"setup-on-android"},"Setup on Android"),(0,o.kt)("p",null,"To configure the external linking in Android, you can create a new intent in the manifest."),(0,o.kt)("p",null,"The easiest way to do this is with the ",(0,o.kt)("inlineCode",{parentName:"p"},"uri-scheme")," package: ",(0,o.kt)("inlineCode",{parentName:"p"},"npx uri-scheme add mychat --android"),"."),(0,o.kt)("p",null,"If you want to add it manually, open up ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleApp/android/app/src/main/AndroidManifest.xml"),", and make the following adjustments:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"launchMode")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"MainActivity")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"singleTask")," in order to receive intent on existing ",(0,o.kt)("inlineCode",{parentName:"li"},"MainActivity")," (this is the default, so you may not need to actually change anything)."),(0,o.kt)("li",{parentName:"ol"},"Add the new ",(0,o.kt)("a",{parentName:"li",href:"http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters"},(0,o.kt)("inlineCode",{parentName:"a"},"intent-filter"))," inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"MainActivity")," entry with a ",(0,o.kt)("inlineCode",{parentName:"li"},"VIEW")," type action:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<activity\n    android:name=".MainActivity"\n    android:launchMode="singleTask">\n    <intent-filter>\n        <action android:name="android.intent.action.MAIN" />\n        <category android:name="android.intent.category.LAUNCHER" />\n    </intent-filter>\n    <intent-filter>\n        <action android:name="android.intent.action.VIEW" />\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n        <data android:scheme="mychat" />\n    </intent-filter>\n</activity>\n')),(0,o.kt)("p",null,"Similar to Universal Links on iOS, you can also use a domain to associate the app with your website on Android by ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/training/app-links/verify-site-associations"},"verifying Android App Links"),". First, you need to configure your ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},'android:autoVerify="true"')," to your ",(0,o.kt)("inlineCode",{parentName:"li"},"<intent-filter>")," entry."),(0,o.kt)("li",{parentName:"ol"},"Add your domain's ",(0,o.kt)("inlineCode",{parentName:"li"},"scheme")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"host")," in a new ",(0,o.kt)("inlineCode",{parentName:"li"},"<data>")," entry inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"<intent-filter>"),".")),(0,o.kt)("p",null,"After adding them, it should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<activity\n    android:name=".MainActivity"\n    android:launchMode="singleTask">\n    <intent-filter android:autoVerify="true">\n        <action android:name="android.intent.action.MAIN" />\n        <category android:name="android.intent.category.LAUNCHER" />\n    </intent-filter>\n    <intent-filter>\n        <action android:name="android.intent.action.VIEW" />\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n        <data android:scheme="mychat" />\n    </intent-filter>\n    <intent-filter>\n        <action android:name="android.intent.action.VIEW" />\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n        <data android:scheme="http" />\n        <data android:scheme="https" />\n        <data android:host="www.example.com" />\n    </intent-filter>\n</activity>\n')),(0,o.kt)("p",null,"Then, you need to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/training/app-links/verify-site-associations#web-assoc"},"declare the association")," between your website and your intent filters by hosting a Digital Asset Links JSON file."),(0,o.kt)("h2",{id:"testing-deep-links"},"Testing deep links"),(0,o.kt)("p",null,"Before testing deep links, make sure that you rebuild and install the app in your emulator/simulator/device."),(0,o.kt)("p",null,"If you're testing on iOS, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native run-ios\n")),(0,o.kt)("p",null,"If you're testing on Android, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native run-android\n")),(0,o.kt)("p",null,"If you're using Expo managed workflow and testing on Expo client, you don't need to rebuild the app. However, you will need to use the correct address and port that's printed when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"expo start")," (",(0,o.kt)("a",{parentName:"p",href:"#setup-with-expo-projects"},"see above"),"), e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"exp://127.0.0.1:19000/--/"),"."),(0,o.kt)("p",null,"If you want to test with your custom scheme in your Expo app, you will need rebuild your standalone app by running ",(0,o.kt)("inlineCode",{parentName:"p"},"expo build:ios -t simulator")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"expo build:android")," and install the resulting binaries."),(0,o.kt)("h3",{id:"testing-with-npx-uri-scheme"},"Testing with ",(0,o.kt)("inlineCode",{parentName:"h3"},"npx uri-scheme")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"uri-scheme")," package is a command line tool that can be used to test deep links on both iOS & Android. It can be used as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx uri-scheme open [your deep link] --[ios|android]\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'npx uri-scheme open "mychat://chat/jane" --ios\n')),(0,o.kt)("p",null,"Or if using Expo client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'npx uri-scheme open "exp://127.0.0.1:19000/--/chat/jane" --ios\n')),(0,o.kt)("h3",{id:"testing-with-xcrun-on-ios"},"Testing with ",(0,o.kt)("inlineCode",{parentName:"h3"},"xcrun")," on iOS"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"xcrun")," command can be used as follows to test deep links with the iOS simulator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"xcrun simctl openurl booted [your deep link]\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'xcrun simctl openurl booted "mychat://chat/jane"\n')),(0,o.kt)("h3",{id:"testing-with-adb-on-android"},"Testing with ",(0,o.kt)("inlineCode",{parentName:"h3"},"adb")," on Android"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"adb")," command can be used as follows to test deep links with the Android emulator or a connected device:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"adb shell am start -W -a android.intent.action.VIEW -d [your deep link] [your android package name]\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'adb shell am start -W -a android.intent.action.VIEW -d "mychat://chat/jane" com.simpleapp\n')),(0,o.kt)("p",null,"Or if using Expo client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'adb shell am start -W -a android.intent.action.VIEW -d "exp://127.0.0.1:19000/--/chat/jane" host.exp.exponent\n')),(0,o.kt)("h2",{id:"third-party-integrations"},"Third-party integrations"),(0,o.kt)("p",null,"React Native's ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking")," isn't the only way to handle deep linking. You might also want to integrate other services such as ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/dynamic-links"},"Firebase Dynamic Links"),", ",(0,o.kt)("a",{parentName:"p",href:"https://help.branch.io/developers-hub/docs/react-native"},"Branch")," etc. which provide their own API for getting notified of incoming links."),(0,o.kt)("p",null,"To achieve this, you'd need to override how React Navigation subscribes to incoming links. To do so, you can provide your own ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-container#linkinggetinitialurl"},(0,o.kt)("inlineCode",{parentName:"a"},"getInitialURL"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-container#linkingsubscribe"},(0,o.kt)("inlineCode",{parentName:"a"},"subscribe"))," functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const linking = {\n  prefixes: ['myapp://', 'https://myapp.com'],\n\n  // Custom function to get the URL which was used to open the app\n  async getInitialURL() {\n    // First, you would need to get the initial URL from your third-party integration\n    // The exact usage depend on the third-party SDK you use\n    // For example, to get to get the initial URL for Firebase Dynamic Links:\n    const { isAvailable } = utils().playServicesAvailability;\n\n    if (isAvailable) {\n      const initialLink = await dynamicLinks().getInitialLink();\n\n      if (initialLink) {\n        return initialLink.url;\n      }\n    }\n\n    // As a fallback, you may want to do the default deep link handling\n    const url = await Linking.getInitialURL();\n\n    return url;\n  },\n\n  // Custom function to subscribe to incoming links\n  subscribe(listener) {\n    // Listen to incoming links from Firebase Dynamic Links\n    const unsubscribeFirebase = dynamicLinks().onLink(({ url }) => {\n      listener(url);\n    });\n\n    // Listen to incoming links from deep linking\n    const linkingSubscription = Linking.addEventListener('url', ({ url }) => {\n      listener(url);\n    });\n\n    return () => {\n      // Clean up the event listeners\n      unsubscribeFirebase();\n      linkingSubscription.remove();\n    };\n  },\n\n  config: {\n    // Deep link configuration\n  },\n};\n")),(0,o.kt)("p",null,"Similar to the above example, you can integrate any API that provides a way to get the initial URL and to subscribe to new incoming URLs using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getInitialURL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," options."))}h.isMDXComponent=!0},55236:function(e,n,t){n.Z=t.p+"assets/images/xcode-linking-9a32c91fae982fab28dc33e7f951e8b3.png"}}]);