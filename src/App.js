import Posts from './components/Posts';
import Header from './components/Header';
import Footer from './components/Footer';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];


function App() {
  return (
    <>
      <Header title="Posts" sections={sections} />
      <Posts />
      <Footer
        title="Contact me"
        description="saurabhmaurya341@gmail.com"
      />
    </>
  );
}

export default App;
