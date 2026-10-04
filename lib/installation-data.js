// TVoxar IPTV - Comprehensive Installation Guides Data
// 100% Original Content for TVoxar

export const installationGuides = [
  {
    slug: "firestick",
    device: "Amazon Fire TV Stick",
    title: "How to Install & Set Up TVoxar on Amazon Firestick (Complete 2026 Walkthrough)",
    metaTitle: "How to Install IPTV on Firestick (2026 Guide) - TVoxar IPTV",
    metaDescription: "Step-by-step tutorial to install and configure TVoxar IPTV on Amazon Firestick, Fire TV 4K, and Cube using Downloader, TiviMate, and IPTV Smarters Pro.",
    shortDesc: "Complete guide to sideloading and streaming TVoxar on all Amazon Fire OS devices.",
    recommendedApps: ["TiviMate", "IPTV Smarters Pro", "IBO Player Pro"],
    estimatedTime: "5 - 7 minutes",
    difficulty: "Beginner Friendly",
    steps: [
      {
        number: 1,
        title: "Install the Downloader Application",
        details: [
          "From your Firestick home screen, navigate to the Search icon (Find > Search).",
          "Type 'Downloader' using the on-screen keyboard.",
          "Select the orange Downloader icon from the search results and click 'Download' or 'Get'.",
          "Once installation completes, return to the Firestick Home Screen.",
        ],
      },
      {
        number: 2,
        title: "Enable Developer Options & Unknown Sources",
        details: [
          "Go to Firestick 'Settings' (gear icon on the right side of the navigation bar).",
          "Select 'My Fire TV' (or 'Device & Software').",
          "If you do not see 'Developer Options': Click 'About', highlight 'Fire TV Stick', and click the center remote button rapidly 7 times until the message 'No need, you are already a developer' appears.",
          "Press Back to return to 'My Fire TV', then open 'Developer Options'.",
          "Select 'Install unknown apps' and toggle 'Downloader' to ON.",
        ],
      },
      {
        number: 3,
        title: "Download Your Preferred IPTV App (TiviMate or Smarters)",
        details: [
          "Open the Downloader app and grant permissions to access device storage.",
          "In the URL bar, enter the quick code for IPTV Smarters Pro or TiviMate.",
          "Click 'Go'. The APK file will immediately begin downloading.",
          "When the download finishes, click 'Install' on the pop-up prompt.",
          "After installation, select 'Delete' to remove the installation APK and conserve Firestick storage.",
        ],
      },
      {
        number: 4,
        title: "Enter Your TVoxar Credentials & Start Streaming",
        details: [
          "Open your installed player from 'Your Apps & Channels'.",
          "Select 'Login with Xtream Codes API' (recommended).",
          "Enter your TVoxar account details received in your order email:",
          "Name: TVoxar IPTV",
          "Username: (Your TVoxar Username)",
          "Password: (Your TVoxar Password)",
          "Server URL: (Your TVoxar Server Portal URL)",
          "Click 'Add User' or 'Connect'. Within seconds, your channel guide, sports channels, and VOD catalog will load.",
        ],
      },
    ],
    troubleshooting: [
      {
        problem: "Downloader displays 'URL cannot be reached' error?",
        solution: "Verify your internet connection and ensure your Firestick time and date settings are set to automatic under Settings > Preferences.",
      },
      {
        problem: "Developer Options is not visible in My Fire TV?",
        solution: "Go to Settings > My Fire TV > About, highlight your device name, and press the remote center button 7 times continuously to reveal Developer Options.",
      },
      {
        problem: "Stream experiences stuttering during live sports?",
        solution: "In player settings, switch hardware decoder to HW/Hardware Acceleration and increase buffer cache to 5 seconds.",
      },
    ],
  },
  {
    slug: "samsung-lg-smart-tv",
    device: "Samsung & LG Smart TV",
    title: "How to Set Up TVoxar on Samsung Tizen & LG webOS Smart TVs",
    metaTitle: "How to Install IPTV on Samsung & LG Smart TV - TVoxar IPTV",
    metaDescription: "Learn how to watch TVoxar IPTV on Samsung Smart TV and LG webOS using IBO Player Pro, Smart IPTV, or Nanomid directly from official TV app stores.",
    shortDesc: "Stream TVoxar directly on Samsung and LG TVs without needing external HDMI sticks.",
    recommendedApps: ["IBO Player Pro", "Smart IPTV (SIPTV)", "Nanomid Player"],
    estimatedTime: "4 - 6 minutes",
    difficulty: "Easy",
    steps: [
      {
        number: 1,
        title: "Install an IPTV Player from the Official TV App Store",
        details: [
          "For Samsung TVs: Press the Home button, open 'Samsung Apps', and search for 'IBO Player' or 'Smart IPTV'.",
          "For LG TVs: Press the Home button, open the 'LG Content Store', and search for 'IBO Player Pro'.",
          "Click 'Install' and launch the app once the download finishes.",
        ],
      },
      {
        number: 2,
        title: "Locate Your TV's MAC Address and Device Key",
        details: [
          "When you launch the app, a welcome screen will display two identifiers:",
          "MAC Address (e.g., 00:1A:79:XX:XX:XX)",
          "Device Key / Device Code (a 6-digit alphanumeric PIN)",
          "Keep this screen open or note these two values down.",
        ],
      },
      {
        number: 3,
        title: "Upload Your TVoxar Playlist via the Web Portal",
        details: [
          "On your phone or computer, visit the official management portal of your installed app (e.g., iboplayer.com/manage).",
          "Log in using your displayed MAC Address and Device Key.",
          "Click 'Add Playlist' or 'Add XC (Xtream Codes)'.",
          "Enter your TVoxar Server URL, Username, and Password.",
          "Save the configuration.",
        ],
      },
      {
        number: 4,
        title: "Reload the App on Your Smart TV",
        details: [
          "Return to your television screen and press 'Reload' or restart the app.",
          "Your complete TVoxar playlist with Live TV, Sports categories, and Movies will load instantly.",
        ],
      },
    ],
    troubleshooting: [
      {
        problem: "The app says trial expired?",
        solution: "Third-party TV store apps like IBO Player offer a 7-day free trial before requiring a one-time app license fee. This is separate from your TVoxar streaming subscription.",
      },
      {
        problem: "Channels take long to load?",
        solution: "Connect your Samsung or LG Smart TV using an Ethernet cable rather than 2.4GHz Wi-Fi for optimal 4K throughput.",
      },
    ],
  },
  {
    slug: "android",
    device: "Android TV, Google TV & Android Boxes",
    title: "How to Install & Set Up TVoxar on Android TV, Google TV & Mobile",
    metaTitle: "How to Set Up IPTV on Android TV & Box - TVoxar IPTV",
    metaDescription: "Quick guide to installing TVoxar on Android TV, Google TV with Chromecast, Nvidia Shield, and Android smartphones using TiviMate and OTT Navigator.",
    shortDesc: "Experience the ultimate IPTV interface on any certified Android TV device.",
    recommendedApps: ["TiviMate", "IPTV Smarters Pro", "OTT Navigator"],
    estimatedTime: "3 - 5 minutes",
    difficulty: "Very Easy",
    steps: [
      {
        number: 1,
        title: "Download TiviMate or Smarters from Google Play Store",
        details: [
          "Open the Google Play Store on your Android TV or Google TV device.",
          "Search for 'TiviMate IPTV Player' or 'IPTV Smarters Pro'.",
          "Click 'Install' directly from the official store.",
        ],
      },
      {
        number: 2,
        title: "Open the App & Select Add Playlist",
        details: [
          "Launch TiviMate or your selected IPTV player.",
          "Select 'Add Playlist' and choose 'Xtream Codes'.",
        ],
      },
      {
        number: 3,
        title: "Input TVoxar Account Details",
        details: [
          "Fill in Server Address, Username, and Password.",
          "Enable 'Include TV Channels' and 'Include VOD'.",
          "Click 'Done' to finalize.",
        ],
      },
    ],
    troubleshooting: [
      {
        problem: "Cannot find TiviMate on my mobile phone?",
        solution: "TiviMate is designed for Android TV boxes with remotes. For touchscreens, we recommend installing 'IPTV Smarters Pro' or 'Televizo' from Google Play.",
      },
    ],
  },
  {
    slug: "apple-tv-ios",
    device: "Apple TV, iPhone & iPad",
    title: "How to Install TVoxar on Apple TV, iPhone & iPad (tvOS & iOS Guide)",
    metaTitle: "How to Set Up IPTV on Apple TV, iPhone & iPad - TVoxar IPTV",
    metaDescription: "Stream TVoxar IPTV on Apple TV 4K, iPhone, and iPad using IPTVX, GSE Smart IPTV, or Smarters Player Lite with seamless iCloud sync.",
    shortDesc: "Enjoy premium 4K streaming with Apple-native fluid design on iOS and tvOS.",
    recommendedApps: ["IPTVX", "Smarters Player Lite", "GSE Smart IPTV"],
    estimatedTime: "4 - 5 minutes",
    difficulty: "Easy",
    steps: [
      {
        number: 1,
        title: "Download a Top-Rated IPTV Player from the Apple App Store",
        details: [
          "Open the App Store on your Apple TV, iPhone, or iPad.",
          "Search for 'IPTVX' (recommended for Apple TV) or 'Smarters Player Lite'.",
          "Download and open the application.",
        ],
      },
      {
        number: 2,
        title: "Connect Your TVoxar Account",
        details: [
          "Select 'Xtream Codes API' as your login provider.",
          "Enter your TVoxar Portal URL, Username, and Password.",
          "Tap Connect / Login.",
        ],
      },
      {
        number: 3,
        title: "Configure Apple Player Settings",
        details: [
          "Enable Hardware Acceleration for butter-smooth 60fps sports playback.",
          "Turn on iCloud Sync if you want your favorites synced across your iPhone, iPad, and Apple TV.",
        ],
      },
    ],
    troubleshooting: [
      {
        problem: "No audio on certain 4K movie tracks?",
        solution: "In IPTVX or Smarters audio settings, switch audio output to software decoding or VLC player engine to enable Dolby Digital / AC3 passthrough.",
      },
    ],
  },
  {
    slug: "windows-mac",
    device: "Windows PC & Mac",
    title: "How to Watch TVoxar IPTV on Windows 10/11 & macOS",
    metaTitle: "How to Set Up IPTV on Windows PC and Mac - TVoxar IPTV",
    metaDescription: "Stream TVoxar on your desktop or laptop using IPTV Smarters Pro Desktop, VLC Media Player, or our high-speed Web Player.",
    shortDesc: "Transform your computer or multi-monitor workstation into a media powerhouse.",
    recommendedApps: ["IPTV Smarters Pro Desktop", "VLC Media Player", "MyIPTV Player"],
    estimatedTime: "3 minutes",
    difficulty: "Very Easy",
    steps: [
      {
        number: 1,
        title: "Download IPTV Smarters Pro for Windows or macOS",
        details: [
          "Download the official IPTV Smarters application for Windows (.exe) or macOS (.dmg).",
          "Run the installer and launch the program.",
        ],
      },
      {
        number: 2,
        title: "Login via Xtream Codes",
        details: [
          "Select 'Add New User'.",
          "Enter your TVoxar server credentials.",
          "Enjoy high-resolution streaming with picture-in-picture mode while working.",
        ],
      },
    ],
    troubleshooting: [
      {
        problem: "Can I use VLC Media Player instead?",
        solution: "Yes! Open VLC, press Ctrl+N (or Cmd+N on Mac), paste your TVoxar M3U playlist URL, and press Play.",
      },
    ],
  },
  {
    slug: "mag-box",
    device: "MAG Box & STB Emulator",
    title: "How to Set Up TVoxar on MAG Box 250, 254, 322, 421 & 524",
    metaTitle: "How to Set Up IPTV on MAG Box & STB Emulator - TVoxar IPTV",
    metaDescription: "Configure TVoxar IPTV on Infomir MAG boxes using MAC address portal setup. Step-by-step instructions for classic set-top box users.",
    shortDesc: "Classic set-top box portal integration for Infomir MAG receivers.",
    recommendedApps: ["Embedded MAG Portal", "STB Emulator Pro"],
    estimatedTime: "3 - 5 minutes",
    difficulty: "Moderate",
    steps: [
      {
        number: 1,
        title: "Locate Your MAG MAC Address",
        details: [
          "Look at the sticker under your MAG box. It begins with 00:1A:79:XX:XX:XX.",
          "Provide this MAC address when placing your TVoxar subscription order or via customer support.",
        ],
      },
      {
        number: 2,
        title: "Configure Portal Settings",
        details: [
          "Turn on your MAG box without the Ethernet cable plugged in to enter the System Settings menu.",
          "Navigate to 'Settings' > 'System Settings' > 'Servers' > 'Portals'.",
          "Portal 1 Name: TVoxar IPTV",
          "Portal 1 URL: (Enter the Mag Portal URL supplied in your TVoxar activation email)",
        ],
      },
      {
        number: 3,
        title: "Reboot Your MAG Receiver",
        details: [
          "Press 'Save' and reboot your MAG device with the network cable plugged in.",
          "The TVoxar inner portal will load automatically.",
        ],
      },
    ],
    troubleshooting: [
      {
        problem: "Screen displays 'Your STB is blocked'?",
        solution: "Ensure you provided the exact matching MAC address to TVoxar support and that your subscription active period is valid.",
      },
    ],
  },
  {
    slug: "formuler-box",
    device: "Formuler Z Series & MYTVOnline",
    title: "How to Configure TVoxar on Formuler Z8, Z10 & Z11 (MYTVOnline 2/3)",
    metaTitle: "How to Set Up IPTV on Formuler Box (MYTVOnline) - TVoxar IPTV",
    metaDescription: "Step-by-step tutorial to connect TVoxar to Formuler Z10 and Z11 using MYTVOnline 2 and MYTVOnline 3 with full catchup and recording support.",
    shortDesc: "Premium hardware integration with Formuler's acclaimed MYTVOnline interface.",
    recommendedApps: ["MYTVOnline 2", "MYTVOnline 3"],
    estimatedTime: "3 minutes",
    difficulty: "Easy",
    steps: [
      {
        number: 1,
        title: "Launch MYTVOnline on Your Formuler Box",
        details: [
          "Open MYTVOnline 2 or MYTVOnline 3 from your home screen.",
          "Select 'Add Portal' or 'Add Connection'.",
        ],
      },
      {
        number: 2,
        title: "Select Xtream Codes or Portal API",
        details: [
          "Choose 'Xtream Codes API'.",
          "Portal Title: TVoxar",
          "Server URL: Enter your TVoxar portal URL.",
          "Username & Password: Enter your TVoxar credentials.",
        ],
      },
      {
        number: 3,
        title: "Connect and Download EPG",
        details: [
          "Click 'Connect'. Enjoy lightning-fast channel zapping, 7-day catchup, and USB recording.",
        ],
      },
    ],
    troubleshooting: [
      {
        problem: "EPG guide missing on some channels?",
        solution: "In MYTVOnline settings, select 'EPG' > 'Refresh EPG' and set EPG offset to match your local timezone.",
      },
    ],
  },
  {
    slug: "roku",
    device: "Roku TV & Streaming Stick",
    title: "How to Watch TVoxar on Roku TV & Roku Express (2 Smart Methods)",
    metaTitle: "How to Watch IPTV on Roku TV (2 Smart Ways) - TVoxar IPTV",
    metaDescription: "Because Roku OS blocks direct IPTV apps, discover the 2 easiest working methods to stream TVoxar on Roku via Apple AirPlay and Android Screen Mirroring.",
    shortDesc: "Enjoy TVoxar on Roku screens using high-definition screen mirroring and AirPlay.",
    recommendedApps: ["Apple AirPlay 2", "Android Smart View / Cast"],
    estimatedTime: "4 minutes",
    difficulty: "Easy",
    steps: [
      {
        number: 1,
        title: "Method 1: Apple AirPlay from iPhone / iPad to Roku",
        details: [
          "Ensure your iPhone/iPad and Roku TV are connected to the same Wi-Fi network.",
          "On Roku, go to Settings > Apple AirPlay and HomeKit > Ensure AirPlay is ON.",
          "Open IPTV Smarters Lite or IPTVX on your iPhone with TVoxar loaded.",
          "Play any live stream or movie, tap the AirPlay icon, and select your Roku TV.",
        ],
      },
      {
        number: 2,
        title: "Method 2: Android Screen Mirroring to Roku",
        details: [
          "On Roku, go to Settings > System > Screen Mirroring > Screen Mirroring Mode > Select 'Prompt' or 'Always Allow'.",
          "On your Android phone, open quick settings and tap 'Smart View', 'Cast', or 'Screen Cast'.",
          "Select your Roku device and open your TVoxar IPTV player on your phone.",
        ],
      },
    ],
    troubleshooting: [
      {
        problem: "Roku does not appear in AirPlay list?",
        solution: "Restart both your Roku and Apple device, and verify both devices are on the exact same Wi-Fi frequency (5GHz recommended).",
      },
    ],
  },
];
