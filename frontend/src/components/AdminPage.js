import React from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";


function AdminPage() {
  const users = [
    { id: 1, name: "John Doe", role: "Customer", email: "john@example.com" },
    { id: 2, name: "Jane Smith", role: "Admin", email: "jane@example.com" },
    { id: 3, name: "Sam Wilson", role: "Customer", email: "sam@example.com" },
  ];

  return (
    <div className="admin-page">
      <Container fluid>
        {/* Header Section */}
        <Row>
          <Col>
            <h2 className="admin-header">Admin Dashboard</h2>
          </Col>
        </Row>

        {/* Cards Section */}
        <Row className="mb-4">
          <Col md={4}>
            <Card className="stat-card">
              <Card.Body>
                <Card.Title>Total Users</Card.Title>
                <Card.Text className="stat-value">50</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="stat-card">
              <Card.Body>
                <Card.Title>Total Admins</Card.Title>
                <Card.Text className="stat-value">5</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="stat-card">
              <Card.Body>
                <Card.Title>Total Customers</Card.Title>
                <Card.Text className="stat-value">45</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* User Management Table */}
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>User Management</Card.Title>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                        <td>{user.email}</td>
                        <td>
                          <Button variant="primary" size="sm" className="me-2">
                            Edit
                          </Button>
                          <Button variant="danger" size="sm">
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminPage;
