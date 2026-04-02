// ─── MULTIPLY ASSET DATA ─────────────────────────────────────────────────────
// Source of truth for all downloadable Multiplier assets.
// Loaded by index.html via <script src="assets-data.js"></script>

const THUMB_BASE = 'https://qtutkgyklxgcdmmivipp.supabase.co/storage/v1/object/public/multiply-assets/thumbnails/';
const VIDEO_BASE = 'https://qtutkgyklxgcdmmivipp.supabase.co/storage/v1/object/public/multiply-assets/video/';

const ASSETS = {
  'ig-post':    [
    { name:'Good Friday Night', ratio:'portrait', url: THUMB_BASE + 'gf-worship-post.jpg',   size:'2.8MB', thumb: THUMB_BASE + 'gf-worship-post.jpg' },
    { name:'Sunday of Rest',    ratio:'portrait', url: THUMB_BASE + 'sunday-rest-post.jpg',  size:'3.1MB', thumb: THUMB_BASE + 'sunday-rest-post.jpg' },
    { name:'ACCESS',            ratio:'portrait', url: THUMB_BASE + 'access-post.jpg',       size:'2.9MB', thumb: THUMB_BASE + 'access-post.jpg' },
    { name:'Serve M25',         ratio:'portrait', url: THUMB_BASE + 'serve-m25-post.jpg',    size:'3.0MB', thumb: THUMB_BASE + 'serve-m25-post.jpg' },
  ],
  'ig-story':   [
    { name:'Good Friday Night', ratio:'vrt', url: THUMB_BASE + 'gf-worship-story.jpg',  size:'4.0MB', thumb: THUMB_BASE + 'gf-worship-story.jpg' },
    { name:'Sunday of Rest',    ratio:'vrt', url: THUMB_BASE + 'sunday-rest-story.jpg', size:'3.8MB', thumb: THUMB_BASE + 'sunday-rest-story.jpg' },
    { name:'ACCESS',            ratio:'vrt', url: THUMB_BASE + 'access-story.jpg',      size:'3.9MB', thumb: THUMB_BASE + 'access-story.jpg' },
    { name:'Serve M25',         ratio:'vrt', url: THUMB_BASE + 'serve-m25-story.jpg',   size:'4.1MB', thumb: THUMB_BASE + 'serve-m25-story.jpg' },
  ],
  'tt-graphic': [
    { name:'Good Friday Night', ratio:'vrt', url: THUMB_BASE + 'gf-worship-story.jpg',  size:'4.0MB', thumb: THUMB_BASE + 'gf-worship-story.jpg' },
    { name:'Sunday of Rest',    ratio:'vrt', url: THUMB_BASE + 'sunday-rest-story.jpg', size:'3.8MB', thumb: THUMB_BASE + 'sunday-rest-story.jpg' },
    { name:'ACCESS',            ratio:'vrt', url: THUMB_BASE + 'access-story.jpg',      size:'3.9MB', thumb: THUMB_BASE + 'access-story.jpg' },
    { name:'Serve M25',         ratio:'vrt', url: THUMB_BASE + 'serve-m25-story.jpg',   size:'4.1MB', thumb: THUMB_BASE + 'serve-m25-story.jpg' },
  ],
  'tt-video':   [
    { name:'Sunday Invite',   ratio:'vrt', url: VIDEO_BASE + 'Sunday%20Invite.mp4', size:'', thumb:'' },
  ],
  'fb-post':    [
    { name:'Good Friday Night', ratio:'sq', url: THUMB_BASE + 'gf-worship-post.jpg',   size:'2.8MB', thumb: THUMB_BASE + 'gf-worship-post.jpg' },
    { name:'Sunday of Rest',    ratio:'sq', url: THUMB_BASE + 'sunday-rest-post.jpg',  size:'3.1MB', thumb: THUMB_BASE + 'sunday-rest-post.jpg' },
    { name:'ACCESS',            ratio:'sq', url: THUMB_BASE + 'access-post.jpg',       size:'2.9MB', thumb: THUMB_BASE + 'access-post.jpg' },
    { name:'Serve M25',         ratio:'sq', url: THUMB_BASE + 'serve-m25-post.jpg',    size:'3.0MB', thumb: THUMB_BASE + 'serve-m25-post.jpg' },
  ],
  'fb-story':   [
    { name:'Good Friday Night', ratio:'vrt', url: THUMB_BASE + 'gf-worship-story.jpg',  size:'4.0MB', thumb: THUMB_BASE + 'gf-worship-story.jpg' },
    { name:'Sunday of Rest',    ratio:'vrt', url: THUMB_BASE + 'sunday-rest-story.jpg', size:'3.8MB', thumb: THUMB_BASE + 'sunday-rest-story.jpg' },
    { name:'ACCESS',            ratio:'vrt', url: THUMB_BASE + 'access-story.jpg',      size:'3.9MB', thumb: THUMB_BASE + 'access-story.jpg' },
    { name:'Serve M25',         ratio:'vrt', url: THUMB_BASE + 'serve-m25-story.jpg',   size:'4.1MB', thumb: THUMB_BASE + 'serve-m25-story.jpg' },
  ],
  'vid-land':   [
    { name:'Promo - Full',     ratio:'lnd', url:'', size:'', thumb: THUMB_BASE + 'landscape-1.jpg' },
  ],
  'vid-vert':   [
    { name:'Sunday Invite',   ratio:'vrt', url: VIDEO_BASE + 'Sunday%20Invite.mp4', size:'', thumb:'' },
  ],
  'vid-sq':     [],
  'dd-ig-post':  [
    { name:'Good Friday Night', ratio:'sq', url: THUMB_BASE + 'gf-worship-post.jpg',  size:'2.8MB', thumb: THUMB_BASE + 'gf-worship-post.jpg' },
    { name:'Serve M25',         ratio:'sq', url: THUMB_BASE + 'serve-m25-post.jpg',   size:'3.0MB', thumb: THUMB_BASE + 'serve-m25-post.jpg' },
  ],
  'dd-ig-story': [
    { name:'Good Friday Night', ratio:'vrt', url: THUMB_BASE + 'gf-worship-story.jpg',  size:'4.0MB', thumb: THUMB_BASE + 'gf-worship-story.jpg' },
    { name:'Serve M25',         ratio:'vrt', url: THUMB_BASE + 'serve-m25-story.jpg',   size:'4.1MB', thumb: THUMB_BASE + 'serve-m25-story.jpg' },
  ],
  'dd-tiktok':   [
    { name:'Good Friday Night', ratio:'vrt', url: THUMB_BASE + 'gf-worship-story.jpg',  size:'4.0MB', thumb: THUMB_BASE + 'gf-worship-story.jpg' },
    { name:'Serve M25',         ratio:'vrt', url: THUMB_BASE + 'serve-m25-story.jpg',   size:'4.1MB', thumb: THUMB_BASE + 'serve-m25-story.jpg' },
  ],
  'dd-facebook': [
    { name:'Good Friday Night', ratio:'sq', url: THUMB_BASE + 'gf-worship-post.jpg',  size:'2.8MB', thumb: THUMB_BASE + 'gf-worship-post.jpg' },
    { name:'Serve M25',         ratio:'sq', url: THUMB_BASE + 'serve-m25-post.jpg',   size:'3.0MB', thumb: THUMB_BASE + 'serve-m25-post.jpg' },
  ],
  'dd-video':    [
    { name:'Sunday Invite',   ratio:'vrt', url: VIDEO_BASE + 'Sunday%20Invite.mp4', size:'', thumb:'' },
  ],
};
