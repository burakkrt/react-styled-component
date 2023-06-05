const Status = ({ status }) => {

  return (
    <div className={"position-fixed end-0 start-0 bottom-0 m-2 bg-danger py-2 px-3 rounded text-white"}>Şu
      anda <span className="fw-bold">{process.env.NODE_ENV}</span> modundasınız.
      <p className="m-0">{process.env.REACT_APP_CONTENT}</p>
    </div>
  );
};

export default Status;