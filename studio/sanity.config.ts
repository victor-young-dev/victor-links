import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {linkHub} from './schemaTypes/linkHub';
export default defineConfig({
 name:'default',title:'Victor — Link Hub',
 projectId:process.env.SANITY_STUDIO_PROJECT_ID || 'replace_me',
 dataset:process.env.SANITY_STUDIO_DATASET || 'production',
 plugins:[structureTool()],schema:{types:[linkHub]}
});
