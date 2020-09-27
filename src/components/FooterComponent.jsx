import React from "react";
import { Button } from "@material-ui/core";
import styles from "../style/Stylesheet.module.css";

function FooterComponent(props) {

    let { currentFilterButton, onButtonFilter, tasks } = props;

    return (
        (
            <div className={styles.main_footer_container}>
                <div className={styles.total_count_container}>
                    <p>ALL({tasks.length})</p>
                </div>
                <div className={styles.filter_buttons_container}>
                    <Button
                        size="medium"
                        variant="text"
                        color={
                            currentFilterButton === "all" ? "primary" : "default"
                        }
                        onClick={() => onButtonFilter("all")}
                    >
                        All
                    </Button>

                    <Button
                        size="medium"
                        variant="text"
                        color={
                            currentFilterButton === "active" ? "primary" : "default"
                        }
                        onClick={() => onButtonFilter("active")}
                    >
                        Active
                    </Button>

                    <Button
                        size="medium"
                        variant="text"
                        color={
                            currentFilterButton === "complete" ? "primary" : "default"
                        }
                        onClick={() => onButtonFilter("complete")}
                    >
                        Complete
                    </Button>
                </div>
            </div>
        )
    );
}
export default FooterComponent;