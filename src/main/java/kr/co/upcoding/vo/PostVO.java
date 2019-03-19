package kr.co.upcoding.vo;

public class PostVO{
    String bp_id;
    String bc_id;
    String bp_id_reply;
    String bp_title;
    String bp_writer;
    String bp_date;
    String bp_views;
    String bp_content;
    String bp_depth;

    // 개인적으로 만듬
    String bp_writer_name;
    String bp_category_name;

    public String getBp_category_name() {
        return bp_category_name;
    }

    public void setBp_category_name(String bp_category_name) {
        this.bp_category_name = bp_category_name;
    }

    public String getBp_id() {
        return bp_id;
    }

    public void setBp_id(String bp_id) {
        this.bp_id = bp_id;
    }

    public String getBc_id() {
        return bc_id;
    }

    public void setBc_id(String bc_id) {
        this.bc_id = bc_id;
    }

    public String getBp_id_reply() {
        return bp_id_reply;
    }

    public void setBp_id_reply(String bp_id_reply) {
        this.bp_id_reply = bp_id_reply;
    }

    public String getBp_title() {
        return bp_title;
    }

    public void setBp_title(String bp_title) {
        this.bp_title = bp_title;
    }

    public String getBp_writer() {
        return bp_writer;
    }

    public void setBp_writer(String bp_writer) {
        this.bp_writer = bp_writer;
    }

    public String getBp_date() {
        return bp_date;
    }

    public void setBp_date(String bp_date) {
        this.bp_date = bp_date;
    }

    public String getBp_views() {
        return bp_views;
    }

    public void setBp_views(String bp_views) {
        this.bp_views = bp_views;
    }

    public String getBp_content() {
        return bp_content;
    }

    public void setBp_content(String bp_content) {
        this.bp_content = bp_content;
    }

    public String getBp_depth() {
        return bp_depth;
    }

    public void setBp_depth(String bp_depth) {
        this.bp_depth = bp_depth;
    }

    public String getBp_writer_name() {
        return bp_writer_name;
    }

    public void setBp_writer_name(String bp_writer_name) {
        this.bp_writer_name = bp_writer_name;
    }

    @Override
    public String toString() {
        return "PostVO{" +
                "bp_id='" + bp_id + '\'' +
                ", bc_id='" + bc_id + '\'' +
                ", bp_id_reply='" + bp_id_reply + '\'' +
                ", bp_title='" + bp_title + '\'' +
                ", bp_writer='" + bp_writer + '\'' +
                ", bp_date='" + bp_date + '\'' +
                ", bp_views='" + bp_views + '\'' +
                ", bp_content='" + bp_content + '\'' +
                ", bp_depth='" + bp_depth + '\'' +
                '}';
    }
}
