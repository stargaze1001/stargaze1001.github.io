import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: '瓜沥智汇' },
  },
  collections: {
    plans: collection({
      label: '策划方案',
      path: 'src/content/posts/*',
      slugField: 'title',
      format: { contentField: 'content', data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: '标题' } }),
        date: fields.date({ label: '日期', validation: { isRequired: true } }),
        category: fields.text({ label: '分类', defaultValue: '发展建议' }),
        tags: fields.array(fields.text({ label: '标签' }), {
          label: '标签',
          itemLabel: (props) => props.value,
        }),
        summary: fields.text({ label: '简介', multiline: true }),
        content: fields.markdoc({ label: '正文', extension: 'md' }),
      },
    }),
  },
});
