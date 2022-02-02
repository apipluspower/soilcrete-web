interface data {
    desktop_des: string,
    tablet_des: string,
    responsive: string
};
export const datas: data[] = [
    {
        desktop_des: "แก้ปัญหาพื้นทรุด ได้ตรงจุด เพื่อรากฐานเคหสถานที่มั่นคง",
        tablet_des: "แก้ปัญหาพื้นทรุด ตรงจุด",
        responsive: "flex md:flex-row flex-col items-center gap-2 md:gap-5"
    },
    {
        desktop_des: "มีประสบการณ์กว่า 30 ปี ให้ผู้เชี่ยวชาญดูแล พื้นราบ พื้นเอียงเราก็ทำได้",
        tablet_des: "มีประสบการณ์กว่า 30 ปี",
        responsive: "flex md:flex-row flex-col items-center gap-2 md:gap-5"
    },
    {
        desktop_des: "บริษัทอันดับ 1 เรื่องดินทรุด",
        tablet_des: "",
        responsive: "hidden md:flex md:flex-row  items-center gap-2 md:gap-5",
    },
    {
        desktop_des: "รับประกัน 5 ปี ซ่อมแซม เมื่อเจอปัญหา",
        tablet_des: "รับประกัน 10 ปี นับจากส่งงาน",
        responsive: "flex md:flex-row flex-col items-center gap-2 md:gap-5"
    },
];