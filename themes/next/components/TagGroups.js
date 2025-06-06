import { siteConfig } from '@/lib/config'
import TagItemMini from './TagItemMini'

/**
 * 标签组
 * @param tags
 * @param currentTag
 * @returns {JSX.Element}
 * @constructor
 */
const TagGroups = ({ tags, currentTag }) => {
  if (!tags || tags.length === 0) return <></>

  const tagsCount = siteConfig('NEXT_PREVIEW_TAG_COUNT')
  const tagOptions = tags.slice(0, tagsCount)
  return (
    <div id='tags-group' className='dark:border-gray-600 w-66 space-y-2'>
      {tagOptions.map(tag => {
        const selected = tag.name === currentTag
        return <TagItemMini key={tag.name} tag={tag} selected={selected} />
      })}
    </div>
  )
}

export default TagGroups
