$(document).ready(function () {
  var apiEndpoint = 'https://localhost:9200/webdomain1_wiki/_search';

  var username = 'elastic';
  var password = 'kgVvcHvInh3lJ9z*ezDl';

  $('#search-button').click(function () {
    var searchTerm = $('#search-input').val();
    if (searchTerm == '') {
      searchTerm = '""';
    }
    $.ajax({
      url: apiEndpoint + '?q=content:' + searchTerm,
      type: 'GET',
      username: username,
      password: password,
      dataType: 'json',
      cors: true,
      secure: true,
      async: true,
      crossDomain: true,

      headers: {
        Authorization: 'Basic ' + btoa(username + ':' + password),
      },

      // beforeSend: function (xhr) {
      //   xhr.setRequestHeader(
      //     "Authorization",
      //     "Basic " + btoa(username + ":" + password)
      //   );
      // },

      success: function (data) {
        var searchResults = data;
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

        const resultsContainer = document.getElementById('results-container');
        $('#results-container').html('');
        console.log(resultsContainer);
        for (let i = 0; i < results.length; i++) {
          const result = results[i];

          const link = document.createElement('li');
          link.textContent = result.url;

          const title = document.createElement('li');
          title.textContent = result.title;

          const resultContainer = document.createElement('div');
          resultContainer.setAttribute('class', 'output-lists');
          resultContainer.appendChild(link);
          resultContainer.appendChild(title);

          resultsContainer.appendChild(resultContainer);
        }
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      },
    });
  });
});
