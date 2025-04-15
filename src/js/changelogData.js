document.addEventListener('DOMContentLoaded', function () {
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
