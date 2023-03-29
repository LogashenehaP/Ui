const jsonData = {
  took: 5,
  timed_out: false,
  _shards: {
    total: 5,
    successful: 5,
    failed: 0,
  },
  hits: {
    total: 2,
    max_score: 1.0,
    hits: [
      {
        _index: 'my_index',
        _type: 'my_type',
        _id: '1',
        _score: 1.0,
        _source: {
          title: 'First Title',
          url: 'http://example.com/',
        },
      },
      {
        _index: 'my_index',
        _type: 'my_type',
        _id: '1',
        _score: 1.0,
        _source: {
          title: 'First Title',
          url: 'http://example.com/',
        },
      },
      {
        _index: 'my_index',
        _type: 'my_type',
        _id: '1',
        _score: 1.0,
        _source: {
          title: 'First Title',
          url: 'http://example.com/',
        },
      },
      {
        _index: 'my_index',
        _type: 'my_type',
        _id: '1',
        _score: 1.0,
        _source: {
          title: 'First Title',
          url: 'http://example.com/',
        },
      },
      {
        _index: 'my_index',
        _type: 'my_type',
        _id: '1',
        _score: 1.0,
        _source: {
          title: 'First Title',
          url: 'http://example.com/',
        },
      },
      {
        _index: 'my_index',
        _type: 'my_type',
        _id: '1',
        _score: 1.0,
        _source: {
          title: 'First Title',
          url: 'http://example.com/',
        },
      },
      {
        _index: 'my_index',
        _type: 'my_type',
        _id: '1',
        _score: 1.0,
        _source: {
          title: 'First Title',
          url: 'http://example.com/',
        },
      },
      {
        _index: 'my_index',
        _type: 'my_type',
        _id: '1',
        _score: 1.0,
        _source: {
          title: 'First Title',
          url: 'http://example.com/',
        },
      },
      {
        _index: 'my_index',
        _type: 'my_type',
        _id: '1',
        _score: 1.0,
        _source: {
          title: 'First Title',
          url: 'http://example.com/',
        },
      },
      {
        _index: 'my_index',
        _type: 'my_type',
        _id: '2',
        _score: 0.5,
        _source: {
          title: 'Second Title',
          url: 'http://example.com/second',
        },
      },
    ],
  },
};

const results = [];

const hits = jsonData.hits.hits;

for (let i = 0; i < hits.length; i++) {
  const hit = hits[i];
  const source = hit._source;
  const title = source.title;
  const url = source.url;
  results.push({ title, url });
}

console.log(results);
