interface data {
    pic: string,
    title: string,
    desc: string,
    class: string,
};
export const datas: data[] = [
    {
        pic: "https://soilcrete-static-pictures.s3.us-west-002.backblazeb2.com/about/photo1.png",
        title: "ด้านเทคโนโลยี",
        desc: "เป็นบริษัทไทยรายแรกที่นําเอา เทคโนโลยี jet grouting มาช่วยในการปรับปรุงคุณสมบัติของดิน เพื่องานด้านฐานรากของประเทศไทย ตั้งแต่ปี พ.ศ. 2535 จากประสบการณ์กว่า 300โครงการ ที่รับประกันคุณภาพงาน ได้แสดงให้ เห็นว่าเราไม่เคยหยุดนิ่งกับพัฒนาความรู้ ความสามารถ รวมถึงเทคโนโลยี เพื่อนําเอาระบบ soil-cement column มาประยุกต์ใช้ในงานด้านวิศวกรรมปฐพี ของเมืองไทย",
        class: "order-first mb-6 md:order-last",
    },
    {
        pic: "https://soilcrete-static-pictures.s3.us-west-002.backblazeb2.com/about/photo2.png",
        title: "ด้านวิชาการ",
        desc: "บริษัทฯ ได้ศึกษาและร่วมทำการวิจัย กับภาควิชาวิศวกรรมโยธา คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี โดยค้นพบว่าการก่อสร้างเสาเข็มดินซีเมนต์ด้วยระบบ Single Fluid Jet Grouting เหมาะสำหรับการปรับปรุงคุณภาพ ดินในประเทศไทย โดยเฉพาะอย่างยิ่งดินเหนียวในกรุงเทพ (Soft Bangkok clay)",
        class: "order-first mb-6 md:order-first"
    },
];