const explorer = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "Public",
      isFolder: true,
      items: [
        {
          id: 6,
          name: "index.html",
          isFolder: false,
          items: [],
        },
        {
          id: 7,
          name: "favicon.ico",
          isFolder: false,
          items: [],
        },
        {
          id: 8,
          name: "images",
          isFolder: true,
          items: [
            {
              id: 9,
              name: "logo.png",
              isFolder: false,
              items: [],
            },
            {
              id: 10,
              name: "banner.jpg",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Src",
      isFolder: true,
      items: [
        {
          id: 11,
          name: "components",
          isFolder: true,
          items: [
            {
              id: 12,
              name: "Folder.jsx",
              isFolder: false,
              items: [],
            },
            {
              id: 13,
              name: "Button.jsx",
              isFolder: false,
              items: [],
            },
          ],
        },

        {
          id: 14,
          name: "pages",
          isFolder: true,
          items: [
            {
              id: 15,
              name: "Home.jsx",
              isFolder: false,
              items: [],
            },
            {
              id: 16,
              name: "About.jsx",
              isFolder: false,
              items: [],
            },
          ],
        },

        {
          id: 17,
          name: "App.jsx",
          isFolder: false,
          items: [],
        },

        {
          id: 18,
          name: "index.js",
          isFolder: false,
          items: [],
        },

        {
          id: 19,
          name: "styles.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: 3,
      name: "Package.json",
      isFolder: false,
      items: [],
    },
    {
      id: 4,
      name: "Package-lock.json",
      isFolder: false,
      items: [],
    },
    {
      id: "5",
      name: "README.md",
      isFolder: false,
      items: [],
    },
  ],
};

export default explorer;
