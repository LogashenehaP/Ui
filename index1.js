$(document).ready(function () {
    var apiEndpoint = 'https://localhost:9200/_search';
  
    $('#search-button').click(function () {
      var searchTerm = $('#search-input').val();
  
      $.get(apiEndpoint + '?q=content:' + searchTerm, function (data) {
        var searchResults = data.results;
  
        const results = [];
        const hits = searchResults.hits.hits;
  
        for (let i = 0; i < hits.length; i++) {
          const hit = hits[i];
          const source = hit._source;
          const title = source.title;
          const url = source.url;
          results.push({ title, url });
        }
  
        console.log(results);
      });
    });
  });
  