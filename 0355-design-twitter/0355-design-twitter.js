
var Twitter = function() {
    this.time = 0;
    this.tweets = new Map();
    this.following = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.tweets.has(userId)){
        this.tweets.set(userId, []);
    }
    this.tweets.get(userId).push({ time: this.time++, tweetId});
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const followees = this.following.get(userId) || new Set();
    followees.add(userId);
    const allTweets = [];

    for (const uid of followees) {
        const userTweets = this.tweets.get(uid) || [];
        allTweets.push(...userTweets);
    }

    allTweets.sort((a, b) => b.time - a.time);

    return allTweets.slice(0, 10).map(tweet => tweet.tweetId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (followerId === followeeId) return;

    if (!this.following.has(followerId)) {
        this.following.set(followerId, new Set());
    }
    this.following.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.following.has(followerId)) {
        this.following.get(followerId).delete(followeeId);
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */