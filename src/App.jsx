import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from 'semantic-ui-react'
import './App.css'

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic siz='tiny' color='green'>
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Icoming:
                </Statistic.Label>
                <Statistic.Value>1,045,50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Grid.Column>
                <Statistic siz='tiny' color='red'>
                  <Statistic.Label style={{ textAlign: 'left' }}>
                    Expenses:
                  </Statistic.Label>
                  <Statistic.Value>623,50</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='left'>
          <Grid.Row>
            <Grid.Column width={10}>Something</Grid.Column>
            <Grid.Column width={3} textAlign='left'>
              $10,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='left'>
          <Grid.Row>
            <Grid.Column width={10}>Something else</Grid.Column>
            <Grid.Column width={3} textAlign='left'>
              $20,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='red'>
        <Grid columns={3} textAlign='left'>
          <Grid.Row>
            <Grid.Column width={10}>Something</Grid.Column>
            <Grid.Column width={3} textAlign='left'>
              $10,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon='tags'
            width={12}
            label='Description'
            placeholder='New shinny thing'
          />
          <Form.Input
            icon='dollar'
            width={4}
            label='Value'
            placeholder='100.00'
            iconPosition='left'
          />
        </Form.Group>
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancle</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  )
}

export default App
