import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./PostForm.module.scss";
import { useForm } from "react-hook-form";

const Component = ({ action, actionText, actionTitleText, href, ...props }) => {
  const [title, setTitle] = useState(props.title || "");
  const [content, setContent] = useState(props.content || "");
  const [image, setImage] = useState(props.image || "");
  const [imageDescription, setImageDescription] = useState(
    props.imageDescription || ""
  );
  const [price, setPrice] = useState(props.price || "");
  const [phone, setPhone] = useState(props.phone || "");
  const [localization, setLocalization] = useState(props.localization || "");
  const [publishDate, setPublishDate] = useState(props.publishDate || "---");
  const [latestUpdate, setlatestUpdate] = useState(props.publishDate || "---");
  const [authorEmail, setauthorEmail] = useState(props.authorEmail || "");
  const [status, setStatus] = useState(props.status || "draft");
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

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
  const handleSubmit = () => {
    console.log(status);
    action({
      title,
      content,
      image,
      imageDescription,
      price,
      phone,
      localization,
      publishDate,
      latestUpdate,
      authorEmail,
      status,
    });
    clearState();
  };

  console.log(errors, "errors");

  return (
    <div className={styles.root}>
      <h2>{actionTitleText}</h2>
      <form onSubmit={validate(handleSubmit)}>
        <label htmlFor="title">
          Title<span className={styles.required}>*</span> (min 3)
        </label>
        <input
          {...register("title", {
            required: {
              value: true,
              message: "Title field is required",
            },
            minLength: {
              value: 3,
              message: "min. 3 characters",
            },
            maxLength: {
              value: 10,
              message: "max. 10 characters",
            },
          })}
          name="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {errors.title && (
          <span className={styles.error}>{errors.title.message}</span>
        )}
        <label htmlFor="content">
          Content<span className={styles.required}>*</span> (min 20)
        </label>
        <input
          {...register("content", {
            required: {
              value: true,
              message: "Title content is required",
            },
            minLength: {
              value: 10,
              message: "min. 10 characters",
            },
            maxLength: {
              value: 100,
              message: "max. 100 characters",
            },
          })}
          name="content"
          type="text"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        {errors.content && (
          <span className={styles.error}>{errors.content.message}</span>
        )}
        <label htmlFor="image">Image</label>
        {props.image ? (
          <img alt={props.imageDescription} src={props.image} />
        ) : (
          <input
            type="file"
            name="image"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => setImage(e.target.files[0].name)}
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

        <label htmlFor="phone">Phone number (np. 997-997-997)</label>
        <input
          {...register("phone", {
            pattern: {
              value: /[0-9]{3}-[0-9]{3}-[0-9]{3}/,
              message: "Wrong phone number!",
            },
          })}
          type="phone"
          className={styles.phoneNumber}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
        />
        {errors.phone && (
          <span className={styles.error}>{errors.phone.message}</span>
        )}
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
          Author (email)<span className={styles.required}>*</span>
        </label>
        <input
          {...register("authorEmail", {
            required: {
              value: true,
              message: "Title email is required",
            },
            pattern: {
              value:
                /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
              message: "wrong email!",
            },
          })}
          name="authorEmail"
          onChange={(e) => setauthorEmail(e.target.value)}
          type="email"
          value={authorEmail}
        />
        {errors.authorEmail && (
          <span className={styles.error}>{errors.authorEmail.message}</span>
        )}
        <label htmlFor="status">
          Status<span className={styles.required}>*</span>
        </label>
        <select
          {...register("status", {
            required: {
              value: true,
              message: "Title status is required",
            },
          })}
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          id="status"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="closed">Closed</option>
        </select>
        {errors.status && (
          <span className={styles.error}>{errors.status.message}</span>
        )}
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
  price: PropTypes.number,
  phone: PropTypes.string,
  localization: PropTypes.string,
};

export {
  Component as PostForm,
  // Container as PostForm,
  Component as PostFormComponent,
};
