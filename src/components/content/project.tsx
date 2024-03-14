import { Button, Modal } from 'antd';
import { useState } from 'react';
import { IoLogoReact } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

interface IProject {
    image: JSX.Element
    title: string
    shortDescription: string
    detail: {
        description: string
        frontend: string
        backend: string
        member: string
        role: string
        demo: string
        github: string
    }

}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null)

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dataProjects: IProject[] = [
        {
            image: <IoLogoReact size={50} color='#20d9ca' />,
            title: 'Website clone tiki 1',
            shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: '1', //dự án làm gì
                frontend: '1',//công nghệ sử dụng
                backend: '1',//công nghệ sử dụng
                member: '1', //bao nhiêu thành viên
                role: '1', //vai trò trong dự án
                demo: '1',  //link video, deploy
                github: '1', //link github
            }
        },
        {
            image: <IoLogoReact size={50} color='#20d9ca' />,
            title: 'Website clone tiki 2',
            shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: '2', //dự án làm gì
                frontend: '2',//công nghệ sử dụng
                backend: '2',//công nghệ sử dụng
                member: '2', //bao nhiêu thành viên
                role: '2', //vai trò trong dự án
                demo: '2',  //link video, deploy
                github: '2', //link github
            }
        },
        {
            image: <IoLogoReact size={50} color='#20d9ca' />,
            title: 'Website clone tiki 3',
            shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: '1', //dự án làm gì
                frontend: '',//công nghệ sử dụng
                backend: '',//công nghệ sử dụng
                member: '', //bao nhiêu thành viên
                role: '', //vai trò trong dự án
                demo: '',  //link video, deploy
                github: '', //link github
            }
        },
        {
            image: <IoLogoReact size={50} color='#20d9ca' />,
            title: 'Website clone tiki 3',
            shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: '2', //dự án làm gì
                frontend: '',//công nghệ sử dụng
                backend: '',//công nghệ sử dụng
                member: '', //bao nhiêu thành viên
                role: '', //vai trò trong dự án
                demo: '',  //link video, deploy
                github: '', //link github
            }
        },
        {
            image: <IoLogoReact size={50} color='#20d9ca' />,
            title: 'Website clone tiki 3',
            shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: '3', //dự án làm gì
                frontend: '',//công nghệ sử dụng
                backend: '',//công nghệ sử dụng
                member: '', //bao nhiêu thành viên
                role: '', //vai trò trong dự án
                demo: '',  //link video, deploy
                github: '', //link github
            }
        },
        {
            image: <IoLogoReact size={50} color='#20d9ca' />,
            title: 'Website clone tiki 3',
            shortDescription: 'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
            detail: {
                description: '', //dự án làm gì
                frontend: '',//công nghệ sử dụng
                backend: '',//công nghệ sử dụng
                member: '', //bao nhiêu thành viên
                role: '', //vai trò trong dự án
                demo: '',  //link video, deploy
                github: '', //link github
            }
        }
    ]
    return (
        <>
            <Button type="primary" onClick={showModal}>
                open modal
            </Button>
            <Modal title={dataDetail && dataDetail.title && `Dự án ${dataDetail.title}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false} maskClosable={false}>
                {dataDetail &&
                    <ul>
                        <li>Miêu tả: {dataDetail.detail.description}</li>
                        <li>Front end: {dataDetail.detail.frontend}</li>
                        <li>Back end: {dataDetail.detail.backend}</li>
                        <li>Số lượng thành viên: {dataDetail.detail.member}</li>
                        <li>Vai trò: {dataDetail.detail.role}</li>
                        <li>Demo: {dataDetail.detail.demo}</li>
                        <li>Github: {dataDetail.detail.github}</li>
                    </ul>
                }
            </Modal>

            <div className="arlo_tm_section" id="project">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Amazing Projects</h3>
                            <span>Các dự án đã hoàn thiện</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="inner">
                                                <div className="icon">
                                                    {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescription}</p>
                                                </div>
                                                <div className="view-detail" style={{ padding: '5px 0' }}>
                                                    <span style={{ cursor: 'pointer' }} onClick={() => {
                                                        setIsModalOpen(true)
                                                        setDataDetail(item)
                                                    }}>
                                                        <FaLongArrowAltRight style={{
                                                            position: "relative",
                                                            top: "2px"
                                                        }} />
                                                        &nbsp; Xem chi tiết
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project