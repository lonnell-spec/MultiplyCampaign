// ─── MULTIPLY ASSET DATA ─────────────────────────────────────────────────────
// Source of truth for all downloadable Multiplier assets.
// Loaded by index.html via <script src="assets-data.js"></script>

const THUMB_BASE = 'https://qtutkgyklxgcdmmivipp.supabase.co/storage/v1/object/public/multiply-assets/thumbnails/';
const VIDEO_BASE = 'https://qtutkgyklxgcdmmivipp.supabase.co/storage/v1/object/public/multiply-assets/video/';

const ASSETS = {
  'fruit-graphic': [
    { name:'Story · 9:16',  ratio:'vrt',      url: THUMB_BASE + 'fruit-9x16.jpg',                 size:'157KB', thumb: THUMB_BASE + 'fruit-9x16.jpg' },
    { name:'Feed · 4:5',    ratio:'portrait', url: THUMB_BASE + 'fruit-4x5.jpg',                  size:'142KB', thumb: THUMB_BASE + 'fruit-4x5.jpg' },
    { name:'Square · 1:1',  ratio:'sq',       url: THUMB_BASE + 'fruit-that-remains-square.jpg',  size:'179KB', thumb: THUMB_BASE + 'fruit-that-remains-square.jpg' },
    { name:'Wide · 16:9',   ratio:'lnd',      url: THUMB_BASE + 'fruit-that-remains-wide.jpg',    size:'425KB', thumb: THUMB_BASE + 'fruit-that-remains-wide.jpg' },
  ],
  'ig-post':    [
    { name:'One Invite',               ratio:'portrait', url: THUMB_BASE + 'one-invite-post.jpg',        size:'1.3MB', thumb: THUMB_BASE + 'one-invite-post.jpg' },
    { name:'Community Becomes Family', ratio:'portrait', url: THUMB_BASE + 'community-family-post.jpg',  size:'1.2MB', thumb: THUMB_BASE + 'community-family-post.jpg' },
  ],
  'ig-story':   [
    { name:'One Invite',               ratio:'vrt', url: THUMB_BASE + 'one-invite-story.jpg',       size:'1.7MB', thumb: THUMB_BASE + 'one-invite-story.jpg' },
    { name:'Community Becomes Family', ratio:'vrt', url: THUMB_BASE + 'community-family-story.jpg', size:'1.7MB', thumb: THUMB_BASE + 'community-family-story.jpg' },
  ],
  'tt-graphic': [
    { name:'One Invite',               ratio:'vrt', url: THUMB_BASE + 'one-invite-story.jpg',       size:'1.7MB', thumb: THUMB_BASE + 'one-invite-story.jpg' },
    { name:'Community Becomes Family', ratio:'vrt', url: THUMB_BASE + 'community-family-story.jpg', size:'1.7MB', thumb: THUMB_BASE + 'community-family-story.jpg' },
  ],
  'tt-video':   [
    { name:'Sunday Invite',     ratio:'vrt', url: VIDEO_BASE + 'sunday-invite-01.mp4',   size:'38MB', thumb: THUMB_BASE + 'sunday-invite-01-thumb.jpg' },
    { name:'FCA Bible Study 1', ratio:'vrt', url: VIDEO_BASE + 'fca-bible-study-01.mp4', size:'24MB', thumb: THUMB_BASE + 'fca-bible-study-01-thumb.jpg' },
    { name:'FCA Bible Study 2', ratio:'vrt', url: VIDEO_BASE + 'fca-bible-study-02.mp4', size:'19MB', thumb: THUMB_BASE + 'fca-bible-study-02-thumb.jpg' },
    { name:'FCA Bible Study 3', ratio:'vrt', url: VIDEO_BASE + 'fca-bible-study-03.mp4', size:'14MB', thumb: THUMB_BASE + 'fca-bible-study-03-thumb.jpg' },
    { name:'FCA Bible Study 4', ratio:'vrt', url: VIDEO_BASE + 'fca-bible-study-04.mp4', size:'12MB', thumb: THUMB_BASE + 'fca-bible-study-04-thumb.jpg' },
    { name:'FCA Bible Study 5', ratio:'vrt', url: VIDEO_BASE + 'fca-bible-study-05.mp4', size:'27MB', thumb: THUMB_BASE + 'fca-bible-study-05-thumb.jpg' },
  ],
  'fb-post':    [
    { name:'One Invite',               ratio:'portrait', url: THUMB_BASE + 'one-invite-post.jpg',        size:'1.3MB', thumb: THUMB_BASE + 'one-invite-post.jpg' },
    { name:'Community Becomes Family', ratio:'portrait', url: THUMB_BASE + 'community-family-post.jpg',  size:'1.2MB', thumb: THUMB_BASE + 'community-family-post.jpg' },
  ],
  'fb-story':   [
    { name:'One Invite',               ratio:'vrt', url: THUMB_BASE + 'one-invite-story.jpg',       size:'1.7MB', thumb: THUMB_BASE + 'one-invite-story.jpg' },
    { name:'Community Becomes Family', ratio:'vrt', url: THUMB_BASE + 'community-family-story.jpg', size:'1.7MB', thumb: THUMB_BASE + 'community-family-story.jpg' },
  ],
  'vid-sunday':   [
    { name:'Sunday Invite', ratio:'vrt', url: VIDEO_BASE + 'sunday-invite-01.mp4', size:'38MB', thumb: THUMB_BASE + 'sunday-invite-01-thumb.jpg' },
  ],
  'vid-outreach': [
    { name:'Outreach', ratio:'lnd', url: VIDEO_BASE + 'outreach-01.mp4', size:'16MB', thumb: THUMB_BASE + 'outreach-01-thumb.jpg' },
  ],
  'vid-fca':      [
    { name:'FCA Bible Study 1', ratio:'vrt', url: VIDEO_BASE + 'fca-bible-study-01.mp4', size:'24MB', thumb: THUMB_BASE + 'fca-bible-study-01-thumb.jpg' },
    { name:'FCA Bible Study 2', ratio:'vrt', url: VIDEO_BASE + 'fca-bible-study-02.mp4', size:'19MB', thumb: THUMB_BASE + 'fca-bible-study-02-thumb.jpg' },
    { name:'FCA Bible Study 3', ratio:'vrt', url: VIDEO_BASE + 'fca-bible-study-03.mp4', size:'14MB', thumb: THUMB_BASE + 'fca-bible-study-03-thumb.jpg' },
    { name:'FCA Bible Study 4', ratio:'vrt', url: VIDEO_BASE + 'fca-bible-study-04.mp4', size:'12MB', thumb: THUMB_BASE + 'fca-bible-study-04-thumb.jpg' },
    { name:'FCA Bible Study 5', ratio:'vrt', url: VIDEO_BASE + 'fca-bible-study-05.mp4', size:'27MB', thumb: THUMB_BASE + 'fca-bible-study-05-thumb.jpg' },
  ],
  'dd-ig-post':  [
    { name:'Community Becomes Family', ratio:'portrait', url: THUMB_BASE + 'community-family-post.jpg',  size:'1.2MB', thumb: THUMB_BASE + 'community-family-post.jpg' },
  ],
  'dd-ig-story': [
    { name:'Community Becomes Family', ratio:'vrt', url: THUMB_BASE + 'community-family-story.jpg', size:'1.7MB', thumb: THUMB_BASE + 'community-family-story.jpg' },
  ],
  'dd-tiktok':   [
    { name:'Community Becomes Family', ratio:'vrt', url: THUMB_BASE + 'community-family-story.jpg', size:'1.7MB', thumb: THUMB_BASE + 'community-family-story.jpg' },
  ],
  'dd-facebook': [
    { name:'Community Becomes Family', ratio:'portrait', url: THUMB_BASE + 'community-family-post.jpg',  size:'1.2MB', thumb: THUMB_BASE + 'community-family-post.jpg' },
  ],
  'dd-video':    [
    { name:'Sunday Invite', ratio:'vrt', url: VIDEO_BASE + 'sunday-invite-01.mp4', size:'38MB', thumb: THUMB_BASE + 'sunday-invite-01-thumb.jpg' },
  ],
};
