const Feed = require('rss-to-json');

module.exports = {

    latest(req, res) {
        Feed.load('https://www.netflixmovies.com/rss/releasedate', function(err, rss){
            if (err) return res.negotiate(err);
            else res.json(rss);
        });
    }

}

