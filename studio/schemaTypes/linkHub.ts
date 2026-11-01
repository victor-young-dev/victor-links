import {defineField,defineType} from 'sanity';
const linkFields=[
  defineField({name:'title',title:'Link title',type:'string',validation:r=>r.required()}),
  defineField({name:'url',title:'URL',type:'url',validation:r=>r.required().uri({allowRelative:true,scheme:['https','mailto']})})
];
export const linkHub=defineType({
  name:'linkHub',title:'Victor — Works & Links',type:'document',fields:[
    defineField({name:'fullName',title:'Full name',type:'string'}),
    defineField({name:'alias',title:'Public name',type:'string'}),
    defineField({name:'role',title:'Positioning',type:'string'}),
    defineField({name:'description',title:'Introduction',type:'text',rows:3}),
    defineField({name:'avatar',title:'Portrait',type:'image',options:{hotspot:true}}),
    defineField({name:'projects',title:'Archive links',type:'array',of:[{
      type:'object',fields:[...linkFields,
        defineField({name:'description',type:'string'}),
        defineField({name:'category',type:'string',options:{list:['Websites','Brands','Communities','Products','Experiments','Collaborations']}}),
        defineField({name:'status',type:'string'}),
        defineField({name:'monogram',type:'string'})
      ]}]}),
    defineField({name:'socialLinks',title:'Other public links',type:'array',of:[{type:'object',fields:linkFields}]})
  ],preview:{select:{title:'fullName',media:'avatar'}}
});
