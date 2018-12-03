import Nav from 'react-icons/lib/md/navigation'
export default {
  name: 'navigation',
  type: 'object',
  title: 'Navigation',
  icon: Nav,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      options: []
    },
    {
      name: 'id',
      type: 'string',
      title: 'Id',
    },
    {
      name: 'navItems',
      type: 'array',
      title: 'Navigation items',
      of: [
        { type: 'navItem'},
        { type: 'navSection'}
      ]
    }
  ]
}
