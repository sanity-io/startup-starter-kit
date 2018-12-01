import MdDomain from 'react-icons/lib/md/domain'

export default {
  name: 'companyInfo',
  type: 'document',
  title: 'companyInfo',
  icon: MdDomain,
  fields: [
    {
      name: 'brand',
      type: 'brand'
    },
    {
      name: 'contact',
      type: 'contact'
    }
  ]
}