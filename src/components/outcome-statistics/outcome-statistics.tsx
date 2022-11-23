import { OutcomeStatisticsItem } from "./outcome-statistics-item/outcome-statistics-item";
import styles from "./outcome-statistics.module.scss";

export const OutcomeStatistics = () => {
  // const statistics = [
  //   {
  //     type: "shopping",
  //     typeLabel: "Shopping",
  //     progress: 100,
  //   },
  //   {
  //     type: "electronics",
  //     typeLabel: "Electronics",
  //     progress: 21,
  //   },
  //   {
  //     type: "travel",
  //     typeLabel: "Travel",
  //     progress: 74,
  //   },
  // ];

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Outcome Statistics</h2>
      <ul className={styles.list}>
        <OutcomeStatisticsItem
          label="Shopping"
          progress={100}
          type="shopping"
        />
        <OutcomeStatisticsItem
          label="Electronics"
          progress={21}
          type="electronics"
        />
        <OutcomeStatisticsItem label="Travel" progress={74} type="travel" />
      </ul>
    </div>
  );
};
