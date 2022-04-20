import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./PostForm.module.scss";

const Component = ({ action, actionText, actionTitleText, href, ...props }) => {
  const [title, setTitle] = useState(props.title || "");
  const [content, setContent] = useState(props.content || "");
  const [image, setImage] = useState(props.image || "");
  const [imageDescription, setImageDescription] = useState(
    props.imageDescription || ""
  );
  const [price, setPrice] = useState(props.price || "");
  const [tel, setTel] = useState(props.tel || "");
  const [localization, setLocalization] = useState(props.localization || "");
  const [publishDate, setPublishDate] = useState(props.publishDate || "---");
  const [latestUpdate, setlatestUpdate] = useState(props.publishDate || "---");
  const [authorEmail, setauthorEmail] = useState(props.authorEmail || "");
  const [status, setStatus] = useState(props.status);

  const today = new Date();
  let month = today.getMonth() + 1;
  if (month <= 9) {
    month = "0" + month;
  }
  const date = today.getFullYear() + "-" + month + "-" + today.getDate();

  useEffect(() => {
    if (props.publishDate) {
      setPublishDate(props.publishDate);
    } else setPublishDate(date);
    setlatestUpdate(date);
  }, [date, props.publishDate]);

  const clearState = () => {
    setTitle("");
    setContent("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      title,
      content,
      image,
      imageDescription,
      price,
      tel,
      localization,
      publishDate,
      latestUpdate,
      authorEmail,
      status,
    });
    clearState();
  };

  return (
    <div className={styles.root}>
      <h2>{actionTitleText}</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">
          Title<span className={styles.required}>*</span> (min 10)
        </label>
        <input
          name="title"
          type="text"
          minLength="10"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="content">
          Content<span className={styles.required}>*</span> (min 20)
        </label>
        <textarea
          name="content"
          type="text"
          minLength="20"
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />

        <label htmlFor="image">Image</label>
        {props.image ? (
          <img alt={props.imageDescription} src={props.image} />
        ) : (
          <input
            type="file"
            name="image"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => setImage(e.target.value)}
          />
        )}

        <label htmlFor="description">Image description (3-15)</label>
        {props.image ? (
          <input
            readOnly
            value={props.imageDescription}
            className={styles.imageDescription}
          />
        ) : (
          <input
            type="text"
            name="description"
            minLength="3"
            maxLength="15"
            value={imageDescription}
            onChange={(e) => setImageDescription(e.target.value)}
          />
        )}

        <label htmlFor="price">Price</label>
        <input
          type="number"
          min="1"
          className={styles.price}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          name="price"
        />

        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          className={styles.phoneNumber}
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />

        <label htmlFor="localization">Localization</label>
        <input
          type="text"
          value={localization}
          onChange={(e) => setLocalization(e.target.value)}
          name="localization"
        />

        <label htmlFor="publishDate">Publish Date</label>
        <input
          name="publishDate"
          className={styles.date}
          type="date"
          readOnly
          value={props.publishDate ? props.publishDate : publishDate}
        />

        <label htmlFor="latestUpdate">Latest Update</label>
        <input
          name="latestUpdate"
          className={styles.date}
          type="date"
          readOnly
          value={props.latestUpdate}
        />

        <label htmlFor="authorEmail">
          Author<span className={styles.required}>*</span>
        </label>
        <input
          name="authorEmail"
          onChange={(e) => setauthorEmail(e.target.value)}
          type="text"
          required
          value={authorEmail}
        />

        <label htmlFor="status">
          Status<span className={styles.required}>*</span>
        </label>
        <select
          name="status"
          value={status}
          required
          onChange={(e) => setStatus(e.target.value)}
          id="status"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="closed">Closed</option>
        </select>
        <p>
          <span className={styles.required}>*</span> - required
        </p>
        <div className={styles.control}>
          <button type="submit">{actionText}</button>
        </div>
      </form>
    </div>
  );
};

Component.propTypes = {
  action: PropTypes.func,
  id: PropTypes.string,
  actionText: PropTypes.string,
  actionTitleText: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  publishDate: PropTypes.string,
  latestUpdate: PropTypes.string,
  authorEmail: PropTypes.string,
  status: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.string,
  imageDescription: PropTypes.string,
  price: PropTypes.string,
  tel: PropTypes.string,
  localization: PropTypes.string,
};

export {
  Component as PostForm,
  // Container as PostForm,
  Component as PostFormComponent,
};
