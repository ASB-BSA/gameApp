type Props = {
  onClick?: any,
  content?: string | number,
  array?: string[],
  bool?: boolean,
}

const TestComponent: React.FC<Props> = ({ onClick, content, array, bool, children }) => (
  <div>
    <p>This is test component.</p>
    <div onClick={() => { console.log('clicked'); onClick && onClick(); }}><button type="button">Click me!</button></div>
    <p>{content}</p>
    <p>{bool ? 'true' : 'false'}</p>
    {array && <ul>{array.map((value, index) => <li key={index}>{value}</li>)}</ul>}
    {children}
  </div>
);

export default TestComponent;