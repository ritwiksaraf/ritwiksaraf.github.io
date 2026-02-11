import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ritwiksaraf",
      "Linkedin": "https://www.linkedin.com/in/ritwiksaraf/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
Component.Explorer({
  filterFn: (node) => {
    // Folders become "<folder>/index" in the trie, so handle both.
    const slug = node.slug

    // Hide the folder itself
    if (slug === "attachments/index") return false

    // Hide everything under attachments/
    if (slug.startsWith("attachments/")) return false

    return true
  },
}),

  ],
  right: [
  Component.ConditionalRender({
    component: Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Blog Posts",
        limit: 6,
        showTags: false,
        filter: (page) => page.slug !== "index", 
      }),
    ),
    condition: (page) => page.fileData.slug === "index",
  }),
  ],
  
  }

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
Component.Explorer({
  filterFn: (node) => {
    // Folders become "<folder>/index" in the trie, so handle both.
    const slug = node.slug

    // Hide the folder itself
    if (slug === "attachments/index") return false

    // Hide everything under attachments/
    if (slug.startsWith("attachments/")) return false

    return true
  },
}),

  ],
  right: [],
}
