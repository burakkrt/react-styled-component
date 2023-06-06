import { StatusFrame } from "./StyleComponent";

const Status = () => {

  return (
    <StatusFrame>Şu
      anda <span className="fw-bold text-info">{process.env.NODE_ENV}</span> modundasınız.
      <p className="m-0">{process.env.REACT_APP_CONTENT}</p>
    </StatusFrame>
  );
};

export default Status;