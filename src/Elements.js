const Elements = {
  in:{
    glyph:"music",
    title:"Instrument",
    fields:[
      {name:"name",type:"text"},
      {name:"ch",type:"text"},
      {name:"di",type:"checkbox"},
      {name:"phantom",type:"checkbox"}]
  },
  out:{
    glyph:"bullhorn",
    title:"Monitor",
    fields:[
      {name:"name",type:"text"},
      {name:"ch",type:"text"}],
  },
  box:{
    glyph:"th",
    title:"Stage box",
    fields:[
      {name:"channels in",type:"text"},
      {name:"channels out",type:"text"}],
  }
}
export default Elements;
