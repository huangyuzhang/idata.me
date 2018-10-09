// basic config
module.exports = {
  title: "Yuzhang's Notes",
  description: "Yuzhang Huang's personal online notebook",
  markdown: {
    lineNumbers: true, // 代码块显示行标
    displayAllHeaders: true // 默认值：false
  },
  themeConfig: {
    // navbar: false,
    lastUpdated: "Last Updated", // string | boolean
    /* service worker start*/
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    },
    /* navigation start */
    nav: [
      { text: "Home", link: "/" },
      { text: "BA", link: "/ba/" },
      {
        text: "Programming",
        items: [
          { text: "JavaScript", link: "/js/" },
          { text: "Python", link: "/python/" },
          { text: "SQL", link: "/sql/" },
          { text: "R", link: "/r/" }
        ]
      },
      {
        text: "Others",
        items: [
          {
            text: "",
            items: [
              { text: "Other Notes", link: "/other/" },
              { text: "About me", link: "/about/" }
            ]
          },
          {
            text: "External",
            items: [
              { text: "热带鱼", link: "https://www.51redaiyu.com" },
              { text: "爱鱼客", link: "http://www.iyu.co" },
              { text: "My Git", link: "http://git.iyu.co" }
            ]
          }
        ]
      }
    ],
    /* navigation end */

    /* sidebar start*/
    sidebar: {
      "/ba/data-analytics/": sidebarDA("Data Analytics"),
      "/ba/strategic-analysis/": sidebarSA("Strategic Analysis"),
      "/ba/programming-for-business-analytics/": sidebarPBA(
        "Programming for Business Analytics"
      ),
      "/ba/masterclass/": sidebarMBA("Masterclass in Business Analytics"),
      "/ba/": sidebarBA("Business Analytics"),
      "/python/": sidebarPython("Python"),
      "/js/": sidebarJS("JavaScript"),
      "/other/": sidebarOther("Other Notes"),
      "/sql/": sidebarSQL("SQL"),
      "/sample/": sampleSidebar("Sample Sidebar")
    }
    /* sidebar end*/
  }
  /* theme config end */
  /* markdown config start */
  // markdown: {
  // 	// markdown-it-anchor 的选项
  // 	anchor: { permalink: false },
  // 	// markdown-it-toc 的选项
  // 	toc: { includeLevel: [1, 2] },
  // 	config: md => {
  // 		// 使用更多的 markdown-it 插件!
  // 		md.use(require('markdown-it-mark'))
  // 	}
  //    },
  /* markdown config end */
};

function sidebarDA(title) {
  return [
    ["../", "<<< back to BA"],
    ["", "Data Analytics"], // first item
    {
      title: "Lecture Notes",
      collapsable: false,
      children: ["lecture1", "lecture2"]
    },
    {
      title: "Courseworks",
      collapsable: false,
      children: ["cw1", "cw2"]
    },
    ["appendix", "Appendix (sample)"]
  ];
}

function sidebarSA(title) {
  return [
    ["../", "<<< back to BA"],
    ["", "Strategic Analysis"], // first item
    {
      title: "Lecture Notes",
      collapsable: false,
      children: ["session1", "session2", "session3", "session4", "case"]
    }
    // ["appendix", "Appendix (sample)"]
  ];
}

function sidebarPBA(title) {
  return [
    ["../", "<<< back to BA"],
    ["", "Programming for Business Analytics"], // first item
    {
      title: "Lecture Notes",
      collapsable: false,
      children: ["lecture1", "lecture2"]
    }
  ];
}

function sidebarMBA(title) {
  return [
    ["../", "<<< back to BA"],
    ["", "Masterclass in Business Analytics"],
    {
      title: "Hands-on Machine Learning with Scikit-Learn & TensorFlow",
      collapsable: true,
      children: ["notes"]
    }
  ];
}

function sidebarBA(title) {
  return [
    {
      title: "Business Analytics",
      collapsable: true,
      children: [""]
    },
    {
      title: "Couse Pages",
      collapsable: false,
      children: [
        "data-analytics/",
        "strategic-analysis/",
        "programming-for-business-analytics/",
        "masterclass/"
      ]
    }
  ];
}

function sidebarPython(title) {
  return [
    {
      title,
      collapsable: false,
      children: ["", "syntax"]
    }
  ];
}

function sidebarJS(title) {
  return [
    {
      title,
      collapsable: false,
      children: ["", "syntax"]
    }
  ];
}

function sidebarOther(title) {
  return [
    {
      title,
      collapsable: false,
      children: ["", "ss", "git", "gogs", "ssh", "nginx", "npm", "tolearn"]
    }
  ];
}

function sidebarSQL(title) {
  return [
    {
      title: "SQL Basics",
      collapsable: false,
      children: [
        "",
        "queries",
        "aggregate-functions",
        "multiple-tables",
        "exercises"
      ]
    },
    {
      title: "SQL: Table Transformation",
      collapsable: false,
      children: ["table-transformation/", "table-transformation/subqueries"]
    }
  ];
}

function sampleSidebar(title) {
  return [
    ["", "Introduction"],
    {
      title: "Chapter 1",
      collapsable: false,
      children: ["ch1/", "ch1/topic1", "ch1/topic2"]
    },
    {
      title: "Chapter 2",
      collapsable: false,
      children: ["ch2/", "ch2/topic1", "ch2/topic2"]
    }
  ];
}
