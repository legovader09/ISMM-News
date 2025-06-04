document.addEventListener('DOMContentLoaded', function () {
  addChangelogEntry({
    version: "v2.0.9",
    date: "June 04, 2025",
    summary: "Idle Slayer 6.3.4 compatibility.",
    features: [
      "Updated mod loader to be compatible with Idle Slayer 6.3.4.",
    ]
  });

  addChangelogEntry({
    version: "v2.0.8",
    date: "May 29, 2025",
    summary: "Idle Slayer 6.3.3 compatibility.",
    features: [
      "Updated mod loader to be compatible with Idle Slayer 6.3.3.",
    ]
  });

  addChangelogEntry({
    version: "v2.0.7",
    date: "May 28, 2025",
    summary: "Bug fixes.",
    bugfixes: [
      "Fixed issue where disabled mods would sometimes reset itself on app startup.",
    ]
  });

  addChangelogEntry({
    version: "v2.0.6",
    date: "May 26, 2025",
    summary: "Idle Slayer 6.3.2 compatibility.",
    features: [
      "Updated mod loader to be compatible with Idle Slayer 6.3.2.",
    ]
  });

  addChangelogEntry({
    version: "v2.0.5",
    date: "May 23, 2025",
    summary: "Idle Slayer 6.3.1 compatibility.",
    features: [
      "Updated mod loader to be compatible with Idle Slayer 6.3.1.",
    ]
  });

  addChangelogEntry({
    version: "v2.0.4",
    date: "May 23, 2025",
    summary: "Log folder button.",
    features: [
      "Added 'Open Log Folder' button to quickly access the Latest.log file.",
    ],
    improvements: [
      "Mod manager now checks Idle Slayer folder every startup to ensure that there are no leftover MelonLoader folders.",
    ]
  });

  addChangelogEntry({
    version: "v2.0.3",
    date: "May 23, 2025",
    summary: "Update internal mod loader binaries to match the latest game version.",
    improvements: [
      "Update internal mod loader binaries to match the latest game version.",
    ],
    bugfixes: [
      "Fixed dialog boxes not showing text correctly under some conditions.",
    ]
  });

  addChangelogEntry({
    version: "v2.0.2 Full Release",
    date: "May 21, 2025",
    summary: "V2 comes out of open beta and is now the default version.",
    improvements: [
      "Mod manifests now get generated for mods that don't have one, improving load times.",
    ],
  });

  addChangelogEntry({
    version: "v2.0.1 (Open Beta 2)",
    date: "May 13, 2025",
    summary: "Minor improvements based on user feedback.",
    improvements: [
      "Tutorial message now shows up when there are no mods installed.",
    ],
    bugfixes: [
      "Fixed ISMM Watcher plugin console spam.",
    ]
  });

  addChangelogEntry({
    version: "v2.0.0 (Open Beta 1)",
    date: "May 10, 2025",
    summary: "New UI and mod system",
    features: [
      { text: "Complete UI redesign", tag: "New" },
    ],
    improvements: [
      "New mod system with better mod management and deployment",
      `New mod structure:
      <ul>
      <li>Mod files are now stored in a separate folder</li>
      <li>ISMM now looks for a banner.png, and a manifest.json to display mod content</li>
      <li>Mods without a manifest are still loaded but with limited description.</li>
      </ul>`,
    ],
    bugfixes: [
      "New UI system fixes various text, button, and layout issues",
    ]
  });

  addChangelogEntry({
    version: "v1.0.6",
    date: "April 17, 2025",
    summary: "Update checker and UI fixes.",
    features: [
      { text: "App checks for updates on every startup so that you don't have to", tag: "New" },
    ],
    bugfixes: [
      "UI buttons and label scaling fixes",
      "Better NoSyncGameLoad checking in case of slight rename"
    ]
  });

  addChangelogEntry({
    version: "v1.0.5",
    date: "April 15, 2025",
    summary: "NoSyncGameLoad prevention.",
    improvements: [
      "Added checks to make sure NoSyncGameLoad does not get imported or deployed, as this mod is no longer required.",
    ]
  });

  addChangelogEntry({
    version: "v1.0.4",
    date: "April 14, 2025",
    summary: "Auto-import features and bug fixes.",
    features: [
      { text: "Automatically import existing MelonLoader installation when you set the game path (automatic if game path is already found)", tag: "New" },
    ],
    bugfixes: [
      "Small UI fixes",
      "Fixed bug where manually deleting a deployed mod will cause the lists to glitch out",
      "Fixed deploy mods button staying greyed out after closing the game"
    ]
  });

  addChangelogEntry({
    version: "v1.0.3",
    date: "April 11, 2025",
    summary: "New app styles and bug fixes.",
    features: [
      { text: "Better app styling and colour scheme", tag: "New" },
    ],
    improvements: [
      "Slightly better description parsing in config entry editor",
      "Added tooltips to various buttons for better accessibility",
      "Automatically open the changelog when the app is launched and the version number has changed",
      "Config files can now be deleted by pressing the delete key when selected in the list"
    ],
    bugfixes: [
      "Fixed dragging in zip file of existing mod causing the app to say there is no mod in the zip file"
    ]
  });

  addChangelogEntry({
    version: "v1.0.2",
    date: "April 09, 2025",
    summary: "New features and bug fixes.",
    features: [
      { text: "Open Mod Manager Folder button", tag: "New" },
      { text: "Changelog viewer", tag: "New" },
      { text: "Added '+ / -' buttons to add and remove mods easily", tag: "New" },
      "Added a deploy button to deploy mods without launching the game",
      "Added a file watcher so that mod lists are automatically updated when external changes are made"
    ],
    improvements: [
      "Mod list now shows how to install mods",
      "Config editor now shows checkbox for boolean config values",
      "Mods can now be deleted by clicking on them in the list, and pressing the delete key",
      "Better application versioning",
      "Various internal improvements and fixes"
    ]
  });

  addChangelogEntry({
    version: "v1.0.1",
    date: "April 08, 2025",
    summary: "Small improvements.",
    features: [
      { text: "App icon", tag: "New" },
      { text: "Config editor", tag: "New" },
      "Added a deploy button to deploy mods without launching the game"
    ],
    improvements: [
      "Better error handling",
    ]
  });

  addChangelogEntry({
    version: "v1.0.0",
    date: "April 07, 2025",
    summary: "Initial release.",
    features: [
      "Automated mod deployment",
    ],
  });

  renderChangelog();
});
