export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605a6819ee6db900b695d2d9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kxev49dv',
                  apiId: '068f5731-7f4b-44b4-8191-668843ee17b9'
                },
                {
                  buildHookId: '605a6819a058aa0099fdb1c2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ejvaz1ez',
                  apiId: '20c4397f-4290-442d-bc0a-957c92bbe03f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/j143/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ejvaz1ez.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
