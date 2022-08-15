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
                  buildHookId: '62f9cb5de468247f1e16a4a4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-oh19epfh',
                  apiId: '4091d6a3-4efc-460a-a5d3-48b49117ce88'
                },
                {
                  buildHookId: '62f9cb5deb22376f4bc2ad99',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vhyme6pa',
                  apiId: 'ab568f39-097a-4d77-ba8a-96ff33b0261d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ckvgemmy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vhyme6pa.netlify.app', category: 'apps'}
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
