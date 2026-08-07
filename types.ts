export type ZhihuVideoItem = {
  target: {
    title_area: {
      text: string;
    };
    link: {
      url: string;
    };
  };
};

export type Question = {
  title: string;
  url: string;
};

export type ZhihuVideoList = {
  data: ZhihuVideoItem[];
};

export type ZhihuQuestionItem = {
  target: {
    title: string;
    id: number;
  };
};

export type ZhihuQuestionList = {
  data: ZhihuQuestionItem[];
};

export type SearchWord = {
  query_display: string;
  real_query: string;
};

export type TopSearch = {
  recommend_queries: {
    queries: SearchWord[];
  };
};

export type Word = {
  title: string;
  url: string;
  realurl?: string;
};

export type ToutiaoTopSearch = {
  data: [
    {
      words: ToutiaoWord[];
    },
  ];
};

export type ToutiaoWord = {
  word: string;
  url: string;
};

/** 知乎热榜登录 cookie 的健康状态（写入 raw/zhihu-cookie-status.json） */
export type ZhihuCookieStatus = {
  /** 最近一次刷新（扫码）cookie 的时间，格式 yyyy-MM-dd HH:mm:ss */
  updatedAt: string;
  /** 最近一次检测 cookie 有效性的时间 */
  checkedAt: string;
  /** 最近一次检测是否有效（接口返回 200） */
  valid: boolean;
  /** 状态说明，如“cookie 已失效，请刷新” */
  note: string;
};
