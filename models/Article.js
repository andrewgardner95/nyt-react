var mongoose = require("mongoose");
var Schema = mongoose.schema;

var ArticleSchema = new Schema ({
    title: {
        type: String,
        required: true
    }
    date {
        type: Date
    }
    url {
        type: String
    }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;