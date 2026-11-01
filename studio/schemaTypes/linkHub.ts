import {defineField,defineType} from 'sanity';
const linkFields=[
 defineField({name:'title',title:'Title',type:'string',validation:r=>r.required()}),
 defineField({name:'url',title:'Destination',type:'url',validation:r=>r.required().uri({allowRelative:true,scheme:['https','mailto']})})
];
export const linkHub=defineType({
 name:'linkHub',title:'Personal Link Hub',type:'document',fields:[
  defineField({name:'fullName',title:'Display name',type:'string',validation:r=>r.required()}),
  defineField({name:'alias',title:'Public name / alias',type:'string'}),
  defineField({name:'role',title:'One-line positioning',type:'string'}),
  defineField({name:'description',title:'Short biography',type:'text',rows:3}),
  defineField({name:'avatar',title:'Portrait',type:'image',options:{hotspot:true}}),
  defineField({name:'primaryLinks',title:'Primary links',type:'array',of:[{type:'object',fields:[...linkFields,defineField({name:'subtitle',title:'Supporting text',type:'string'}),defineField({name:'featured',title:'Featured',type:'boolean',initialValue:false})]}]}),
  defineField({name:'projects',title:'Selected work',type:'array',of:[{type:'object',fields:[...linkFields,defineField({name:'description',title:'Role and status',type:'string'})]}]}),
  defineField({name:'socialLinks',title:'Social profiles',type:'array',of:[{type:'object',fields:linkFields}]}),
  defineField({name:'ventureUrl',title:'RayzorVerse URL',type:'url'}),
  defineField({name:'ventureEmail',title:'Venture enquiry email',type:'string'})
 ],preview:{select:{title:'fullName',media:'avatar'}}
});
