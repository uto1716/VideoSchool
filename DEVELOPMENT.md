# 開発ワークフロー

このドキュメントでは、VideoSchool プロジェクトの開発フローとブランチ戦略について説明します。

## ブランチ戦略

このプロジェクトでは **Git Flow** に基づいたブランチ戦略を採用しています。

### ブランチの種類

- **main**: 本番環境用の安定版（リリース済みのコード）
- **develop**: 開発用ブランチ（次のリリースに向けた機能を統合）
- **feature/機能名**: 新機能開発用（develop から分岐）

## 開発フロー

### 1. 新機能を開発する場合

```bash
# developブランチに移動して最新を取得
git checkout develop
git pull origin develop

# feature ブランチを作成
git checkout -b feature/機能名

# 開発作業を行う
# ... コードを編集 ...

# 変更をコミット
git add .
git commit -m "機能の説明"

# feature ブランチをプッシュ
git push -u origin feature/機能名
```

### 2. 開発完了後、develop にマージ

```bash
# developブランチに移動
git checkout develop

# 最新の状態を取得
git pull origin develop

# feature ブランチをマージ
git merge feature/機能名

# developにプッシュ
git push origin develop

# 不要になった feature ブランチを削除（オプション）
git branch -d feature/機能名
```

### 3. リリース準備ができたら main にマージ

```bash
# mainブランチに移動
git checkout main

# 最新の状態を取得
git pull origin main

# developブランチをマージ
git merge develop

# mainにプッシュ（GitHub Actionsで自動デプロイされます）
git push origin main
```

## コミットメッセージのガイドライン

わかりやすいコミットメッセージを心がけましょう：

- **追加**: 新機能や新ファイルの追加
- **修正**: バグ修正
- **更新**: 既存機能の改善
- **削除**: ファイルや機能の削除
- **リファクタリング**: コードの整理（機能変更なし）
- **ドキュメント**: ドキュメントの変更

### 例

```bash
git commit -m "追加: お問い合わせフォームのバリデーション機能"
git commit -m "修正: ヒーローセクションのレイアウト崩れ"
git commit -m "更新: ボタンのホバーアニメーション改善"
```

## Pull Request（推奨）

GitHub上でPull Requestを使用することで、コードレビューと変更履歴の管理が容易になります。

```bash
# feature ブランチをプッシュ後
gh pr create --base develop --head feature/機能名 --title "機能の説明"
```

## 注意事項

- **main ブランチ**: 直接コミットしない（develop からマージのみ）
- **develop ブランチ**: 日常的な開発の中心
- **feature ブランチ**: 機能ごとに作成し、完了後は削除

## トラブルシューティング

### コンフリクトが発生した場合

```bash
# developの最新を取得してマージ
git checkout feature/機能名
git pull origin develop

# コンフリクトを手動で解決
# ... ファイルを編集 ...

git add .
git commit -m "コンフリクト解決"
```

## 参考リンク

- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow](https://docs.github.com/ja/get-started/quickstart/github-flow)
