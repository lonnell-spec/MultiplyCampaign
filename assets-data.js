// ─── MULTIPLY ASSET DATA ─────────────────────────────────────────────────────
// Source of truth for all downloadable Multiplier assets.
// Loaded by index.html via <script src="assets-data.js"></script>

const THUMB_BASE = 'https://qtutkgyklxgcdmmivipp.supabase.co/storage/v1/object/public/multiply-assets/thumbnails/';
const VIDEO_BASE = 'https://qtutkgyklxgcdmmivipp.supabase.co/storage/v1/object/public/multiply-assets/video/';

const ASSETS = {
  'ig-post':    [
    { name:'Clothe The Culture',       ratio:'portrait', url: THUMB_BASE + 'clothe-culture-post.jpg',    size:'630KB', thumb: THUMB_BASE + 'clothe-culture-post.jpg' },
    { name:'Support The Spread',       ratio:'portrait', url: THUMB_BASE + 'support-spread-post.jpg',    size:'858KB', thumb: THUMB_BASE + 'support-spread-post.jpg' },
    { name:'One Invite',               ratio:'portrait', url: THUMB_BASE + 'one-invite-post.jpg',        size:'1.3MB', thumb: THUMB_BASE + 'one-invite-post.jpg' },
    { name:'Community Becomes Family', ratio:'portrait', url: THUMB_BASE + 'community-family-post.jpg',  size:'1.2MB', thumb: THUMB_BASE + 'community-family-post.jpg' },
  ],
  'ig-story':   [
    { name:'Clothe The Culture',       ratio:'vrt', url: THUMB_BASE + 'clothe-culture-story.jpg',   size:'987KB', thumb: THUMB_BASE + 'clothe-culture-story.jpg' },
    { name:'Support The Spread',       ratio:'vrt', url: THUMB_BASE + 'support-spread-story.jpg',   size:'1.1MB', thumb: THUMB_BASE + 'support-spread-story.jpg' },
    { name:'One Invite',               ratio:'vrt', url: THUMB_BASE + 'one-invite-story.jpg',       size:'1.7MB', thumb: THUMB_BASE + 'one-invite-story.jpg' },
    { name:'Community Becomes Family', ratio:'vrt', url: THUMB_BASE + 'community-family-story.jpg', size:'1.7MB', thumb: THUMB_BASE + 'community-family-story.jpg' },
  ],
  'tt-graphic': [
    { name:'Clothe The Culture',       ratio:'vrt', url: THUMB_BASE + 'clothe-culture-story.jpg',   size:'987KB', thumb: THUMB_BASE + 'clothe-culture-story.jpg' },
    { name:'Support The Spread',       ratio:'vrt', url: THUMB_BASE + 'support-spread-story.jpg',   size:'1.1MB', thumb: THUMB_BASE + 'support-spread-story.jpg' },
    { name:'One Invite',               ratio:'vrt', url: THUMB_BASE + 'one-invite-story.jpg',       size:'1.7MB', thumb: THUMB_BASE + 'one-invite-story.jpg' },
    { name:'Community Becomes Family', ratio:'vrt', url: THUMB_BASE + 'community-family-story.jpg', size:'1.7MB', thumb: THUMB_BASE + 'community-family-story.jpg' },
  ],
  'tt-video':   [
    { name:'Invite Video', ratio:'vrt',  url: VIDEO_BASE + 'Sunday%20Invite.mp4',       size:'134MB', thumb: THUMB_BASE + 'sunday-invite-thumb.jpg' },
    { name:'Invite Video', ratio:'vrt',  url: VIDEO_BASE + 'Fully%20Furnished%202.mp4', size:'408MB', thumb: THUMB_BASE + 'fully-furnished-2-thumb.jpg' },
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'draft%20invite%2002.15-1920.mp4', size:'26MB', thumb: THUMB_BASE + 'draft-invite-thumb.jpg' },
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'ACCESS%202819%20Recap%20Social.mp4', size:'57MB', thumb: THUMB_BASE + 'access-recap-social-thumb.jpg' },
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'ACCESS%202819%20Recap%20Web.mp4',    size:'57MB', thumb: THUMB_BASE + 'access-recap-web-thumb.jpg' },
  ],
  'fb-post':    [
    { name:'Clothe The Culture',       ratio:'sq', url: THUMB_BASE + 'clothe-culture-post.jpg',    size:'630KB', thumb: THUMB_BASE + 'clothe-culture-post.jpg' },
    { name:'Support The Spread',       ratio:'sq', url: THUMB_BASE + 'support-spread-post.jpg',    size:'858KB', thumb: THUMB_BASE + 'support-spread-post.jpg' },
    { name:'One Invite',               ratio:'sq', url: THUMB_BASE + 'one-invite-post.jpg',        size:'1.3MB', thumb: THUMB_BASE + 'one-invite-post.jpg' },
    { name:'Community Becomes Family', ratio:'sq', url: THUMB_BASE + 'community-family-post.jpg',  size:'1.2MB', thumb: THUMB_BASE + 'community-family-post.jpg' },
  ],
  'fb-story':   [
    { name:'Clothe The Culture',       ratio:'vrt', url: THUMB_BASE + 'clothe-culture-story.jpg',   size:'987KB', thumb: THUMB_BASE + 'clothe-culture-story.jpg' },
    { name:'Support The Spread',       ratio:'vrt', url: THUMB_BASE + 'support-spread-story.jpg',   size:'1.1MB', thumb: THUMB_BASE + 'support-spread-story.jpg' },
    { name:'One Invite',               ratio:'vrt', url: THUMB_BASE + 'one-invite-story.jpg',       size:'1.7MB', thumb: THUMB_BASE + 'one-invite-story.jpg' },
    { name:'Community Becomes Family', ratio:'vrt', url: THUMB_BASE + 'community-family-story.jpg', size:'1.7MB', thumb: THUMB_BASE + 'community-family-story.jpg' },
  ],
  'vid-land':   [
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'draft%20invite%2002.15-1920.mp4', size:'26MB', thumb: THUMB_BASE + 'draft-invite-thumb.jpg' },
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'ACCESS%202819%20Recap%20Social.mp4', size:'57MB', thumb: THUMB_BASE + 'access-recap-social-thumb.jpg' },
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'ACCESS%202819%20Recap%20Web.mp4',    size:'57MB', thumb: THUMB_BASE + 'access-recap-web-thumb.jpg' },
  ],
  'vid-vert':   [
    { name:'Invite Video', ratio:'vrt',  url: VIDEO_BASE + 'Sunday%20Invite.mp4',       size:'134MB', thumb: THUMB_BASE + 'sunday-invite-thumb.jpg' },
    { name:'Invite Video', ratio:'vrt',  url: VIDEO_BASE + 'Fully%20Furnished%202.mp4', size:'408MB', thumb: THUMB_BASE + 'fully-furnished-2-thumb.jpg' },
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'draft%20invite%2002.15-1920.mp4', size:'26MB', thumb: THUMB_BASE + 'draft-invite-thumb.jpg' },
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'ACCESS%202819%20Recap%20Social.mp4', size:'57MB', thumb: THUMB_BASE + 'access-recap-social-thumb.jpg' },
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'ACCESS%202819%20Recap%20Web.mp4',    size:'57MB', thumb: THUMB_BASE + 'access-recap-web-thumb.jpg' },
  ],
  'vid-sq':     [],
  'dd-ig-post':  [
    { name:'Clothe The Culture',       ratio:'sq', url: THUMB_BASE + 'clothe-culture-post.jpg',    size:'630KB', thumb: THUMB_BASE + 'clothe-culture-post.jpg' },
    { name:'Community Becomes Family', ratio:'sq', url: THUMB_BASE + 'community-family-post.jpg',  size:'1.2MB', thumb: THUMB_BASE + 'community-family-post.jpg' },
  ],
  'dd-ig-story': [
    { name:'Clothe The Culture',       ratio:'vrt', url: THUMB_BASE + 'clothe-culture-story.jpg',   size:'987KB', thumb: THUMB_BASE + 'clothe-culture-story.jpg' },
    { name:'Community Becomes Family', ratio:'vrt', url: THUMB_BASE + 'community-family-story.jpg', size:'1.7MB', thumb: THUMB_BASE + 'community-family-story.jpg' },
  ],
  'dd-tiktok':   [
    { name:'Clothe The Culture',       ratio:'vrt', url: THUMB_BASE + 'clothe-culture-story.jpg',   size:'987KB', thumb: THUMB_BASE + 'clothe-culture-story.jpg' },
    { name:'Community Becomes Family', ratio:'vrt', url: THUMB_BASE + 'community-family-story.jpg', size:'1.7MB', thumb: THUMB_BASE + 'community-family-story.jpg' },
  ],
  'dd-facebook': [
    { name:'Clothe The Culture',       ratio:'sq', url: THUMB_BASE + 'clothe-culture-post.jpg',    size:'630KB', thumb: THUMB_BASE + 'clothe-culture-post.jpg' },
    { name:'Community Becomes Family', ratio:'sq', url: THUMB_BASE + 'community-family-post.jpg',  size:'1.2MB', thumb: THUMB_BASE + 'community-family-post.jpg' },
  ],
  'dd-video':    [
    { name:'Invite Video', ratio:'vrt',  url: VIDEO_BASE + 'Sunday%20Invite.mp4',       size:'134MB', thumb: THUMB_BASE + 'sunday-invite-thumb.jpg' },
    { name:'Invite Video', ratio:'vrt',  url: VIDEO_BASE + 'Fully%20Furnished%202.mp4', size:'408MB', thumb: THUMB_BASE + 'fully-furnished-2-thumb.jpg' },
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'draft%20invite%2002.15-1920.mp4', size:'26MB', thumb: THUMB_BASE + 'draft-invite-thumb.jpg' },
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'ACCESS%202819%20Recap%20Social.mp4', size:'57MB', thumb: THUMB_BASE + 'access-recap-social-thumb.jpg' },
    { name:'Invite Video', ratio:'land', url: VIDEO_BASE + 'ACCESS%202819%20Recap%20Web.mp4',    size:'57MB', thumb: THUMB_BASE + 'access-recap-web-thumb.jpg' },
  ],
};
