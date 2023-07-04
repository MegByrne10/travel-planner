function Trip({title, description, startDate, endDate}) {
  return(
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Start Date:</strong>{startDate}</p>
      <p><strong>End Date:</strong>{endDate}</p>
      <br />
    </div>
  );
}

export default Trip;
