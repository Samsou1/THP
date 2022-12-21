// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { Component, useState, useEffect} from 'react';
import { Avatar, Button, Card, Col, Icon, Row, Modal, List, Tag, Input, message } from 'antd/es';
import MentionsTagsComponent from './MentionsTagsComponent';
import dataJson from '.assets/data.json';

const App = () => {
  [data, setData] = useState();

  useEffect(() => {
    setData(JSON.parse(dataJson));
  },[])

   function formatDate(date) {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }

  function openPreview(postNumber) {
    setData({...data,
      previewItem: postNumber,
      previewPublicationModal: true,
    });
  }

  function updatePic() {
    alert("J'update la publcation avec l'id : " + data.profileData.posts[data.previewItem].id);
  }

  function deletePic() {
    alert("Je supprime la publcation avec l'id : " + data.profileData.posts[data.previewItem].id);
  }

  function uploadPicture() {
    alert("J'upload une image avec la description : " + data.description + " et les hashtags " + data.hashtags + " et les mentions " + data.mentions);
  }

  function updateMentions(value) {
    setData({ ...data, mentions: value });
  }

  function updateHashtags(value) {
    setData({...data, hashtags: value })
  }

  function updateProfile() {
    let tmp = data.profileData;
    tmp.email = data.email;
    tmp.firstname = data.firstname;
    tmp.lastname = data.lastname;
    tmp.phoneNumber = data.phoneNumber;
    setData({ ...data, profileData: tmp, editProfilModal: false });
    message.success('Profile well updated', 3);
  }

  
  return (
    <div style={{ margin: 50 }}>
      <Modal width={520} visible={data.previewPublicationModal} onCancel={() => dataSet({...data, previewPublicationModal: false })}
        footer={<Row type="flex">
          <Col span={12} className="text-center">
            <Button type="ghost" icon="edit" onClick={updatePic()}>Edit</Button>
          </Col>
          <Col span={12} className="text-center">
            <Button type="danger" icon="delete" onClick={deletePic()}>Delete</Button>
          </Col>
        </Row>}
      >
        <Row type="flex" align="middle">
          <Col xs={24} md={12} className="text-center">
            <img src={data.profileData.posts[data.previewItem].imageUrl} width={200} height={200} alt={data.profileData.posts[data.previewItem].description} />
          </Col>
          <Col xs={24} md={12}>
            <div>
              <b>Description: </b>
              <p>{data.profileData.posts[data.previewItem].description}</p>
            </div>
            <div>
              <b>Hashtag:</b>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={data.profileData.posts[data.previewItem].hashtags}
                renderItem={(tag) => (
                  <List.Item>
                    <Tag>{`${tag}`}</Tag>
                  </List.Item>
                )}
              />
            </div>
            <div>
              <b>Mention:</b>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={data.profileData.posts[data.previewItem].mentions}
                renderItem={(user) => (
                  <List.Item>
                    <Tag>{`@${user}`}</Tag>
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </Modal>
      <Modal title="Upload a picture" okText="Upload" visible={data.uploadModal} onOk={uploadPicture()} onCancel={() => dataSet({ ...data, uploadModal: false })}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Description:</b>
            <Input id="description" title="Description" type="text" value={data.description} onChange={(e) => dataSet({ ...data, description: e.target.value })} />
          </Col>
        </Row>
        <MentionsTagsComponent type="mentions" value={data.mentions} title="Mention a user" setValue={updateMentions()} />
        <MentionsTagsComponent type="tags" value={data.hashtags} title="Hashtags" setValue={updateHashtags()} />
      </Modal>
      <Modal title="Edit your account" okText="Update" visible={data.editProfilModal} onOk={updateProfile()} onCancel={() => dataSet({ ...data, editProfilModal: false })}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>EMail</b>
            <Input id="email" type="text" value={data.email} onChange={(e) => dataSet({ ...data, email: e.target.value })} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Firstname</b>
            <Input id="firstname" type="text" value={data.firstname} onChange={(e) => dataSet({ ...data, firstname: e.target.value })} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Lastname</b>
            <Input id="lastname" type="text" value={data.lastname} onChange={(e) => dataSet({ ...data, lastname: e.target.value })} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Phone number</b>
            <Input id="email" type="text" value={data.phoneNumber} onChange={(e) => dataSet({ ...data, phoneNumber: e.target.value })} />
          </Col>
        </Row>
      </Modal>
      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <Card bordered>
            <Row type="flex" align="middle" justify="center">
              <Col md={14} sm={16} xs={24}>
                <Row type="flex" justify="space-between">
                  <Col span={10} className="text-center">
                    <Avatar size={100} icon="user" className="profil-pic" src={data.profileData.profilePicture} />
                    <h3>{`${data.profileData.firstname} ${data.profileData.lastname}`}</h3>
                  </Col>
                  <Col span={10}>
                    <p>
                      <Icon type="user" className="p-icon" />
                      {data.profileData.username}
                    </p>
                    <p>
                      <Icon type="mail" className="p-icon" />
                      {data.profileData.email}
                    </p>
                    <p>
                      <Icon type="phone" className="p-icon" />
                      {data.profileData.phoneNumber}
                    </p>
                    <p>
                      <Icon type="calendar" className="p-icon" />
                      {formatDate(data.profileData.createdAt)}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={10} sm={16} xs={24} className="text-center">
                <Button type="ghost" icon="setting" onClick={() => dataSet({ ...data, editProfilModal: true })}>Edit account</Button>
                <br />
                <br />
                <Button type="ghost" icon="upload" onClick={() => dataSet({ ...data, uploadModal: true })}>Upload a picture</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col sm={18} xs={24}>
          <Col span={24} className="container text-center">
            <h2>
              <Icon type="save" />
              <span className="span-icon">Publications</span>
            </h2>
            <Card bordered className="card-pubs" onClick={() => openPreview(0)}>
              <img src={data.profileData.posts[0].imageUrl} width={200} height={200} alt={data.profileData.posts[0].imageUrl} />
            </Card>
            <Card bordered className="card-pubs" onClick={() => openPreview(1)}>
              <img src={data.profileData.posts[1].imageUrl} width={200} height={200} alt={data.profileData.posts[1].imageUrl} />
            </Card>
            <Card bordered className="card-pubs" onClick={() => openPreview(2)}>
              <img src={data.profileData.posts[2].imageUrl} width={200} height={200} alt={data.profileData.posts[2].imageUrl} />
            </Card>
          </Col>
        </Col>
      </Row>
    </div>
  )
}


export default App;
