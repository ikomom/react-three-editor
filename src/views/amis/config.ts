export const mockConfig = {
  type: "page",
  body: {
    type: "form",
    mode: "horizontal",
    title: "监听表单内部的修改",
    initApi: "http://localhost:3000/search?keywords=${tpl}",
    actions: [],
    body: [
      {
        label: "数据模板",
        type: "select",
        labelClassName: "text-muted",
        name: "tpl",
        value: "海",
        inline: true,
        options: [
          {
            label: "模板1",
            value: "海",
          },
          {
            label: "模板2",
            value: "魂",
          },
          {
            label: "模板3",
            value: "哈哈",
          },
        ],
        description: '<span class="text-danger">请修改这里看效果</span>',
      },
      {
        label: "名称",
        type: "static",
        labelClassName: "text-muted",
        name: "result.songs.length",
      },
      {
        label: "作者",
        type: "static",
        labelClassName: "text-muted",
        name: "code",
      },
      {
        label: "请求时间",
        type: "static",
        labelClassName: "text-muted",
        format: "YYYY-MM-DD HH:mm:ss",
        name: "result.songCount",
      },
    ],
  },
};
